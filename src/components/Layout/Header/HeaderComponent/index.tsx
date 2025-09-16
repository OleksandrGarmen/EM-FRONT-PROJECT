import './style.css'
import SubmitButton from '../../../Common/Buttons/SubmitButton'
import HeaderLogo from '../HeaderLogo'
import HeaderMenu from '../HeaderMenu'
import { FilteredHeader } from '../../../../utils/FiltredHeaderMenu';
import BasicPopover from '../../../Common/Popover/Popover';
import Modal from '../../../Modal/'
    
const Header = () => {
    const isAuthenticated = !!localStorage.getItem('token')

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
                                <Modal/>
                            </li>
                        </ul>
                    </div>
                )
            }
        </header>
    )
}

export default Header
