import { ShoppingBasket } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import { getCurrentUser, getFromLocalStorage, Booking } from '../../../../localstorage/localStorageHelper';

interface ModalButtonProps {
  
}

const ModalButton = ({ onClick, children }: {onClick?: () => void, children: React.ReactNode}) => {
  const [cartItemsCount, setCartItemsCount] = useState(0)

  const getCartItemsCount = () => {
    const currentUser = getCurrentUser()
    if (!currentUser) {
      return 0
    }

    const carts = getFromLocalStorage<Booking[]>("carts", [])
    const userCart = carts.find(cart => cart.userId == currentUser.id)

    if (!userCart?.booksId.length) {
      return 0
    }

    return userCart.booksId.length
  }

  const updateCartCount = () => {
    const count = getCartItemsCount()
    setCartItemsCount(count)
  }

  const handleClick = () => {
    if (onClick) {
      onClick()
    } else {
      console.log('ModalButton clicked, but no onClick handler provided')
    }
  }

  useEffect(() => {
    const handleStorageChange = () => {
      updateCartCount()
    };

    window.addEventListener("storage", handleStorageChange)
    updateCartCount()

    return () => {
      window.removeEventListener("storage", handleStorageChange)
    }
  }, [])

  return (
    <div onClick={handleClick} className="btn-modal">
      {children}
      {cartItemsCount > 0 && (
        <span className="cart-badge">{cartItemsCount}</span>
      )}
    </div>
  )
}

export default ModalButton;