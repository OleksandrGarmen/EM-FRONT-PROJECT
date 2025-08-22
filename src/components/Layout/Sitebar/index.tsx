import { useEffect } from 'react'
import './style.css'

const Sitebar = () => {

    useEffect(() => {
        const hamMenu = document.querySelector(".ham-menu")
        const offScreenMenu = document.querySelector(".off-screen-menu")

        if (hamMenu && offScreenMenu) {
            const toggleMenu = () => {
                hamMenu.classList.toggle("active")
                offScreenMenu.classList.toggle("active")
            }

            hamMenu.addEventListener("click", toggleMenu)

            return () => {
                hamMenu.removeEventListener("click", toggleMenu)
            }
        }
    }, [])

    return (
        <div style={{ display: 'flex' }}>
            <div className="ham-menu">
                <span></span>
                <span></span>
                <span></span>
            </div>

            <div className="off-screen-menu">

            </div>
        </div>
    )
}

export default Sitebar
