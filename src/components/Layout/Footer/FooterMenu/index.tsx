import { Link } from "react-router";
import './style.css'

type MenuItem = {
  name: string
  link: string
}

const FooterMenu = ({ items }: { items: MenuItem[] }) => {
  return (
<nav className="footer-menu">
      <ul>
        <li><a href="/pricing">Pricing</a></li>
        <li><a href="/about">About us</a></li>
        <li><a href="/features">Features</a></li>
        <li><a href="/help">Help Center</a></li>
        <li><a href="/contact">Contact us</a></li>
        <li><a href="/faqs">FAQs</a></li>
        <li><a href="/careers">Careers</a></li>
      </ul>
    </nav>
    )
}

export default FooterMenu
