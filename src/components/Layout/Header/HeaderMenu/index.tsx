import { Link } from "react-router";
import './style.css'

type MenuItem = {
  name: string
  link: string
}

const HeaderMenu = ({ items }: { items: MenuItem[] }) => {
  const currentPath = location.pathname


  return (
        <ul className='header-menu'>
          {items.map((item, index) => (
            <li key={index} className={`header-links ${currentPath === item.link ? 'header-links-active' : ''}`}>
              <Link to={item.link} className='link'>{item.name}</Link>
            </li>
          ))}
        </ul>
    )
}

export default HeaderMenu
