import './style.css'
import { createPortal } from 'react-dom';
import { useState, useEffect } from 'react';
import { Minus, Plus, X } from 'lucide-react';
import { getCurrentUser, getFromLocalStorage, saveToLocalStorage, addBookToCart, Booking, getBooks } from '../../../../localstorage/localStorageHelper';
import type { Book } from '../../../../types/BookType';
import SubmitButton from '../../Buttons/SubmitButton';

type CartItemWithDetails = {
  bookId: number;
  quantity: number;
  book: Book;
  totalPrice: number;
}

const ModalComponent = ({ isOpen, onClose } : { isOpen: boolean, onClose: () => void }) => {
  const [cartItems, setCartItems] = useState<CartItemWithDetails[]>([])
  const [totalCartPrice, setTotalCartPrice] = useState(0)

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

    window.dispatchEvent(new Event('storage'))
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
    const handleStorageChange = () => {
      loadCartData()
    }

    window.addEventListener("storage", handleStorageChange);
    loadCartData();

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    }
  }, [])

  useEffect(() => {
    if (isOpen) {
      loadCartData()
      document.body.classList.add("active-modal")
    } else {
      document.body.classList.remove("active-modal")
    }

    return () => {
      document.body.classList.remove("active-modal")
    }
  }, [isOpen])

  return createPortal(
    <div className="modal">
      <div onClick={onClose} className="overlay"></div>
      <div className="modal-content">
        <div className="close-modal" onClick={onClose}>
          <X />
        </div>
        
        <div>
          {cartItems.length === 0 ? (
            <div className="empty-cart">
              <p>Your cart is empty</p>
            </div>
          ) : (
            <>
              <ul className='shop-list'>
                {cartItems.map(item => (
                  <li key={item.bookId} className='book-container-purshare'>
                    <div className='book-info-container-purshare'>
                      <div className='cart-image'>
                        <img 
                          src={item.book.image} 
                          alt={item.book.title} 
                          className='book-cart-image'
                        />
                      </div>
                      
                      <div>
                        <h4 className="book-title">{item.book.title}</h4>
                        <p className="book-price">${item.book.price.toFixed(2)}</p>
                      </div>
                    </div>
                    <div className='book-control-container'>
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
                    </div>
                    
                  </li>
                ))}
              </ul>

              <div className="cart-footer">
                <div className="cart-total">
                  <SubmitButton text={`Total: $${totalCartPrice.toFixed(2)}`} />
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>,
    document.getElementById('modal-root')!
  )
}

export default ModalComponent