import './style.css'
import ResponsiveHeader from '../components/Layout/Header/ResponsiveHeader'
import Footer from '../components/Layout/Footer/FooterComponent'
import { useEffect } from 'react'

const LayoutPage = ({children, pageClass} : {children:React.ReactNode, pageClass?: string}) => {

    useEffect(() => {
        const cursorDot = document.querySelector<HTMLDivElement>("[data-cursor-dot]")
        const cursorOutline = document.querySelector<HTMLDivElement>("[data-cursor-outline]")

        if (!cursorDot || !cursorOutline) return

        const handleMouseMove = (e: MouseEvent) => {
            const positionX = e.clientX
            const positionY = e.clientY

            cursorDot.style.left = `${positionX}px`
            cursorDot.style.top = `${positionY}px`

            // cursorOutline.style.left = `${positionX}px`
            // cursorOutline.style.top = `${positionY}px`

            cursorOutline.animate({
                left: `${positionX}px`,
                top: `${positionY}px`
            }, { duration: 500, fill: "forwards" })

        }

        window.addEventListener("mousemove", handleMouseMove)

        return () => {
            window.removeEventListener("mousemove", handleMouseMove)
        }
    }, [])

    return (
        <div className='layout-page'>
            <div className='cursor-dot' data-cursor-dot></div>
            <div className='cursor-outline' data-cursor-outline></div>
            <ResponsiveHeader />
            <div className='content'>
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default LayoutPage
