import './style.css'
import SubmitButton from '../SubmitButton'

const LogoutButton = () => {
    const logout = () => {
        localStorage.removeItem('currentUser')
    }

    return (
        <SubmitButton text='Logout' backgroudColor='#e98d58' onClick={logout}/>
    )
}

export default LogoutButton
