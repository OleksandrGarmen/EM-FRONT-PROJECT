import Header from "./HeaderComponent";
import Sitebar from "../Sitebar/SitebarComponent";
import { useEffect, useState } from "react";

const ResponsiveHeader = () => {
    const [isMobile, setMobile] = useState(window.innerWidth < 1024)

    useEffect(() => {
        const handleResize = () => setMobile(window.innerWidth < 1024)
        window.addEventListener('resize', handleResize)

        return() => window.removeEventListener('resize', handleResize)
    })

    return isMobile ? <Sitebar /> : <Header />
}

export default ResponsiveHeader
