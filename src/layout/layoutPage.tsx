import './style.css'
import ResponsiveHeader from '../components/Layout/Header/ResponsiveHeader'
import Footer from '../components/Layout/Footer/FooterComponent'

const LayoutPage = ({children} : {children:React.ReactNode}) => {

    return (
        <div className='layout-page'>
            <ResponsiveHeader />
            <div className='content'>
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default LayoutPage
