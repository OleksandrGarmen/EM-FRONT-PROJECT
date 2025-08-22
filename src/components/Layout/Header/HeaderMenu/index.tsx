import { Link } from "react-router";
import './style.css'

type MenuItem = {
  name: string;
  link: string;
};

const HeaderMenu = ({ items }: { items: MenuItem[] }) => {
  return (
    <ul className='header-menu'>
      {items.map((item, index) => (
        <li key={index} className='header-links'>
          <Link to={item.link} className='link'>{item.name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default HeaderMenu;
