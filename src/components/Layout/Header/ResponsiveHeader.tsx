import Header from "./HeaderComponent";
import Sitebar from "../Sitebar";
import { useEffect, useState } from "react";

const ResponsiveHeader = () => {
    const [isMobile, setMobile] = useState(window.innerWidth < 768)

    useEffect(() => {
        const handleResize = () => setMobile(window.innerWidth < 768)
        window.addEventListener('resize', handleResize)

        return() => window.removeEventListener('resize', handleResize)
    })

    return isMobile ? <Sitebar /> : <Header />
}

export default ResponsiveHeader
