import './style.css'
import LayoutPage from '../../../layout/layoutPage'
import login from '../../../fixture/login.json'
import { validateLogin } from '../../../utils/LoginValidation'
import React from 'react'
import { tokenGenerator } from '../../../localstorage/localStorageHelper' 

const LoginPage = () => {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [error, setError] = React.useState<string | null>(null)

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault()
        let isValid = validateLogin(email, password)
        if (!isValid) {
            setError('Помилка')
            return
        }
        console.log('Success')
        setError(null)
        const token = localStorage.setItem("token", tokenGenerator())
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
