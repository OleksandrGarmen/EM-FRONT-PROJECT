import './style.css'
import bookShelv from '../../../../assets/book-shelf.png'

const HeaderLogo = () => {
    return (
        <div className='header-logo'>
            <img src={bookShelv} alt="Book heaven logo" className='book-heaven-logo' />
            <p className='header-titile'>Book heaven</p>
        </div>
    )
}

export default HeaderLogo
