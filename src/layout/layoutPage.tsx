import './style.css'
import Header from '../components/Layout/Header'
import Footer from '../components/Layout/Footer'

const LayoutPage = ({children} : {children:React.ReactNode}) => {
    return (
        <div className='layout-page'>
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default LayoutPage
