import './style.css'
import ResponsiveHeader from '../components/Layout/Header/ResponsiveHeader'
import Footer from '../components/Layout/Footer/FooterComponent'

const LayoutPage = ({children, pageClass} : {children:React.ReactNode, pageClass?: string}) => {
    return (
        <div className={`layout-page ${pageClass || ''}`}>
            <ResponsiveHeader />
            <div className='content'>
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default LayoutPage
