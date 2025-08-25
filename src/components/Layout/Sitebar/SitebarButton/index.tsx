import './style.css'
import { Link } from 'react-router'

type MenuItem = {
  name: string
  link: string
  icon?: React.ElementType
}

const SitebarButton = ({ items }: { items: MenuItem[] }) => {
    const currentPath = location.pathname
    return (
        <ul className='sitebar-component'>
            {items.map((item, index) => {
                const Icon = item.icon
                return (
                    <li key={index} className={`sitebar-list ${currentPath === item.link ? 'sitebar-list-active' : ''}`}>
                        <Link to={item.link} className={`link sitebar-link ${currentPath === item.link ? 'sitebar-link-active' : ''}`}>
                            {Icon && <Icon size={18} style={{ marginRight: '8px' }} />}
                            {item.name}
                        </Link>
                    </li>
                )
            })}

        </ul>
    )
}

export default SitebarButton
