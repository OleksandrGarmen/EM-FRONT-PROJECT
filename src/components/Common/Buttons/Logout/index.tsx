import './style.css'
import SubmitButton from '../SubmitButton'

const LogoutButton = () => {
    const logout = () => {
        localStorage.removeItem('token')
    }

    return (
        <SubmitButton text='Logout' backgroudColor='#e98d58' onclick={logout}/>
    )
}

export default LogoutButton
