import './style.css'
import LayoutPage from '../../../layout/layoutPage'
import login from '../../../fixture/login.json'
import { validateLogin } from '../../../utils/LoginValidation'
import React from 'react'
import { saveToLocalStorage, getFromLocalStorage } from '../../../localstorage/localStorageHelper' 
import { UserType } from '../../../types/UserType'

const LoginPage = () => {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [error, setError] = React.useState<string | null>(null)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        let isValid = validateLogin( email, password, )
        if (!isValid) {
            setError('Помилка')
            return
        }
        console.log('Success')
        setError(null)
        
        const existingUsers = getFromLocalStorage<UserType[]>("users", [])
        const newUserId = existingUsers.length > 0 ? 
            Math.max(...existingUsers.map(u => u.id)) + 1 : 1

        const newUser = {
            id: newUserId,
            email: email,
            password: password,
        }

        const updatedUsers = [...existingUsers, newUser]
        saveToLocalStorage("users", updatedUsers)
        
        saveToLocalStorage("currentUser", newUser)
    }

    return (
        <LayoutPage>
            <div className="login-container">
                <h2>{login.pageTitle}</h2>

                <form className="login-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>{login.emailLabel}</label>
                        <input type="email" name='email' onChange={(e) => setEmail(e.target.value)} placeholder={login.emailLabel} />
                    </div>
                    <div className="form-group">
                        <label>{login.passwordLabel}</label>
                        <input type="password" name='password' onChange={(e) => setPassword(e.target.value)} placeholder={login.passwordLabel} />
                    </div>
                    {error && <div className='error-message'>{error}</div>}
                    <button type="submit">{login.loginButton}</button>
                </form>
            </div>
        </LayoutPage>
    )
}

export default LoginPage
