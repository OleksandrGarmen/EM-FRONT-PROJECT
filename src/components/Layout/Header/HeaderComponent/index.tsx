import './style.css'
import { useState } from 'react'
import SubmitButton from '../../../Common/Buttons/SubmitButton'
import HeaderLogo from '../HeaderLogo'
import HeaderMenu from '../HeaderMenu'
import { FilteredHeader } from '../../../../utils/FiltredHeaderMenu';
import BasicPopover from '../../../Common/Popover/Popover';
import ModalButton from '../../../Common/Modal/ModalButton'
import ModalComponent from '../../../Common/Modal/ModalWindow'
import { ShoppingBasket } from 'lucide-react'

const Header = () => {
  const isAuthenticated = !!localStorage.getItem('currentUser')
  const [isModalOpen, setIsModalOpen] = useState(false)
  
  const handleModalOpen = () => {
    setIsModalOpen(true)
  }
  
  const handleModalClose = () => {
    setIsModalOpen(false)
  }
  
  return (
    <header className='header-main-container'>
      {
        !isAuthenticated && (
          <>
            <div className='header-container header-not-auth'>
              <HeaderLogo />
              <HeaderMenu items={FilteredHeader()}/>
              <div className='header-buttons'>
                <SubmitButton text='Sing in' link='/register'/>
                <SubmitButton text='Join us' link='/login'/>
              </div>
            </div>
          </>
        )
      }
      {
        isAuthenticated && (
          <div className='header-container header-auth'>
            <HeaderLogo />
            <HeaderMenu items={FilteredHeader()}/>
            <ul className='header-menu'>
              <BasicPopover>
                <p className='header-links'>Account</p>
              </BasicPopover>
              <li className='header-links header-cart-icon'>
                <ModalButton onClick={handleModalOpen}>
                    <ShoppingBasket size={40} strokeWidth={1} />
                </ModalButton>

              </li>
            </ul>
            
            {isModalOpen && <ModalComponent isOpen={isModalOpen} onClose={handleModalClose} />}
          </div>
        )
      }
    </header>
  )
}

export default Header