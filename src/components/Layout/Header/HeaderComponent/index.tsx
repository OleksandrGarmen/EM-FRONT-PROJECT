import './style.css'
import SubmitButton from '../../../Common/Buttons/SubmitButton'
import { Navigate } from "react-router";
import HeaderLogo from '../HeaderLogo'
import HeaderMenu from '../HeaderMenu'
import SearchInput from '../../../Common/Inputs/Search';
// import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
    const SingIn = () => {
        return <Navigate to="/login" replace />
    }
    const JoinUs = () => {
        return <Navigate to="/register" replace />
    }
    return (
        <header className='header-main-container'>
            {
                !localStorage.getItem('isAuthenticated') && (
                    <>
                        <div className='header-container header-not-auth'>
                            <HeaderLogo />
                            <HeaderMenu items={[
                                { name: "Home", link: "/" },
                                { name: "About us", link: "/about" },
                                { name: "Book", link: "/book" },
                                { name: "Contact us", link: "/contact" },
                            ]}/>
                            <div className='header-buttons'>
                                <SubmitButton text='Sing in' onClick={SingIn}/>
                                <SubmitButton text='Join us' onClick={JoinUs}/>
                            </div>
                        </div>
                    </>
                )
            }
            {
                localStorage.getItem('isAuthenticated') && (
                    <div className='header-container header-auth'>
                        <HeaderLogo />
                        <HeaderMenu items={[
                            { name: "Home", link: "/" },
                            { name: "About us", link: "/about" },
                            { name: "Book", link: "/book" },
                        ]}/>
                        <ul className='header-menu'>
                            <li className='header-links'>
                                <SearchInput placeholder='Search'/>
                            </li>
                            <li className='header-links'>Account</li>
                            <li className='header-links header-cart-icon'>
                                {/* <FaShoppingCart /> */}
                            </li>
                        </ul>
                    </div>
                )
            }
        </header>
    )
}

export default Header
