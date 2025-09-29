import './style.css'
import { createPortal } from 'react-dom';
import { useState, useEffect } from 'react';
import { Minus, Plus, X } from 'lucide-react';
import { getCurrentUser, updateBookQuantityInCart, clearCart, getCartItemsWithDetails, removeBookFromCart } from '../../../../localstorage/localStorageHelper';
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

  const loadCartData = () => {
    const cartItemsWithDetails = getCartItemsWithDetails()
    const totalPrice = cartItemsWithDetails.reduce((total, item) => total + item.totalPrice , 0)

    setCartItems(cartItemsWithDetails)
    setTotalCartPrice(totalPrice)
  }

  const updateQuantity = (bookId: number, newQuantity: number) => {
    updateBookQuantityInCart(bookId, newQuantity)
    loadCartData()
  }

  const removeItem = (bookId: number) => {
    removeBookFromCart(bookId)
    loadCartData()
  }

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
                  <SubmitButton text={`Total: $${totalCartPrice.toFixed(2)}`} onClick={() => {
                    clearCart()
                    setCartItems([])
                    setTotalCartPrice(0)
                  }}/>
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