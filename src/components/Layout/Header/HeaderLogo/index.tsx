import './style.css'
import bookShelv from '../../../../assets/book-shelf.png'
import { Link } from 'react-router'

const HeaderLogo = () => {
    return (
            <Link to='/' className='header-logo'>
                <img src={bookShelv} alt="Book heaven logo" className='book-heaven-logo' />
                <p className='header-titile'>Book heaven</p>
            </Link>
    )
}

export default HeaderLogo
