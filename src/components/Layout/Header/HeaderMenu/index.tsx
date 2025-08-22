import './style.css'

const HeaderMenu = ({name} : {name: string[]}) => {
    return (
        <ul className='header-menu'>
            {name.map((item, index) => (
                <li key={index} className='header-links'>
                    {item}
                </li>
            ))}
        </ul>
    )
}

export default HeaderMenu
