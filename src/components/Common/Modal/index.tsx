import './style.css'
import { createPortal } from 'react-dom';
import { useState, useEffect } from 'react';
import { Minus, Plus, ShoppingBasket, X } from 'lucide-react';
import { getCurrentUser, getFromLocalStorage, saveToLocalStorage, addBookToCart, Booking, getBooks } from '../../../localstorage/localStorageHelper';
import type { Book } from '../../../types/BookType';
import SubmitButton from '../Buttons/SubmitButton';

const ModalComponent = () => {
  type CartItemWithDetails = {
    bookId: number;
    quantity: number;
    book: Book;
    totalPrice: number;
  }

  const [modal, setModal] = useState(false)
  const [cartItems, setCartItems] = useState<CartItemWithDetails[]>([])
  const [totalCartPrice, setTotalCartPrice] = useState(0)

  const toggleModal = () => setModal(!modal)

  const getUserCartData = (): CartItemWithDetails[] => {
    const currentUser = getCurrentUser()
    if (!currentUser) {
      return []
    }
  
    const carts = getFromLocalStorage<Booking[]>("carts", [])
    const userCart = carts.find(cart => cart.userId == currentUser.id)

    if (!carts || !userCart?.booksId.length) {
      return []
    }

    const allBooks = getBooks()

    const cartWithDetails = userCart.booksId.map(cart => {
      const book = allBooks.find(book => book.id === cart.bookId)
      
      if (!book) {
        return null
      }

      return {
        bookId: cart.bookId,
        quantity: cart.quantity,
        book: book,
        totalPrice: book.price * cart.quantity
      }
    }).filter(Boolean) as CartItemWithDetails[]

    return cartWithDetails
  }

  const updateQuantity = (bookid: number, quantity: number) => {
    const currentUser = getCurrentUser()
    if (!currentUser) {
      return
    }

    const carts = getFromLocalStorage<Booking[]>("carts", [])
    const cartIndex = carts.findIndex(cart => cart.userId === currentUser.id)

    if (cartIndex === -1) {
      return
    }

    const bookIndex = carts[cartIndex].booksId.findIndex(item => item.bookId === bookid)

    if (bookIndex === -1) {
      return
    }

    if (quantity <= 0) {
      carts[cartIndex].booksId.splice(bookIndex, 1)
    } else {
      carts[cartIndex].booksId[bookIndex].quantity = quantity
    }

    saveToLocalStorage("carts", carts)
    loadCartData()
  }
  
  const removeItem = (bookid: number) => {
    updateQuantity(bookid, 0)
  }

  const loadCartData = () => {
    const cartData = getUserCartData()
    setCartItems(cartData)

    const total = cartData.reduce((sum, item) => sum + item.totalPrice, 0)
    setTotalCartPrice(total)
  }

  useEffect(() => {
    if (modal) {
      loadCartData()
      document.body.classList.add('active-modal')
    } else {
      document.body.classList.remove('active-modal')
    }

    return () => {
      document.body.classList.remove('active-modal')
    }
  }, [modal])

  return (
    <>
      <div onClick={toggleModal} className="btn-modal">
        <ShoppingBasket size={40} strokeWidth={1} />
        {cartItems.length > 0 && (
          <span className="cart-badge">{cartItems.length}</span>
        )}
      </div>
      {modal && createPortal(
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <div className="close-modal" onClick={toggleModal}>
              <X />
            </div>
            <div>
              {
                cartItems.length === 0 ? (
                  <div className="empty-cart">
                    <p>Your cart is empty</p>
                  </div>
                ) : (
                  <>
                    <ul className='shop-list'>
                      {
                        cartItems.map(item => (
                          <li key={item.bookId}>
                            <div className='cart-image'>
                              <img src={item.book.image} alt={item.book.title} className='book-cart-image'/>
                            </div>
                            <div>
                              <h4 className="book-title">{item.book.title}</h4>
                              <p className="book-price">${item.book.price.toFixed(2)}</p>
                            </div>
                            <div className="quantity-controls">
                              <button 
                                  onClick={() => updateQuantity(item.bookId, item.quantity - 1)}
                                  className="quantity-btn"
                              >
                                  <Minus size={16} />
                              </button>
                              <span className="quantity">{item.quantity}</span>
                              <button 
                                  onClick={() => updateQuantity(item.bookId, item.quantity + 1)}
                                  className="quantity-btn"
                              >
                                  <Plus size={16} />
                              </button>
                            </div>
                            <div className="item-actions">
                              <p className="item-total">${item.totalPrice.toFixed(2)}</p>
                              <SubmitButton 
                                onClick={() => removeItem(item.bookId)}
                                text='Remove'
                              />
                            </div>
                          </li>
                        ))
                      }
                    </ul>
                    <div className="cart-footer">
                      <div className="cart-total">
                        <SubmitButton text={`Total: ${totalCartPrice.toFixed(2)}$`} />
                      </div>
                    </div>
                  </>
                )
              }
            </div>
          </div>
        </div>,
        document.getElementById('modal-root')!
      )}
    </>
  )
}

export default ModalComponent;