import './style.css'
import SubmitButton from '../SubmitButton'

const LogoutButton = () => {
    const logout = () => {
        // localStorage.removeItem()
    }

    return (
        <SubmitButton text='Logout' backgroudColor='#e98d58' />
    )
}

export default LogoutButton
