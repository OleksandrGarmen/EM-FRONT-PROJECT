import './style.css'
import bookShelv from '../../../../assets/book-shelf.png'

const FooterLogo = () => {
    return (
        <div className="footer-logo-wrapper">
<div className="footer-logo">
            <img src={bookShelv} alt="Book Haven" className="logo-img" />
            <h2 className="logo-text">Book Haven</h2>
        </div>
          <select className="language-selector">
                <option>English</option>
                <option>Ukrainian</option>
                <option>Polish</option>
            </select>
        </div>
    )
}

export default FooterLogo
