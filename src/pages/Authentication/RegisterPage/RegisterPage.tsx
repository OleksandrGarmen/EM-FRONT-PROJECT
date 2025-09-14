import './style.css'
import LayoutPage from '../../../layout/layoutPage'
import register from '../../../fixture/register.json'
import { validateRegister } from '../../../utils/RegistrationValidation'
import React from 'react'
import { tokenGenerator } from '../../../localstorage/localStorageHelper' 

const RegisterPage = () => {
    const [userName, setUserName] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [repeatPassword, setRepeatPassword] = React.useState('')
    const [error, setError] = React.useState<string | null>(null)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        let isValid = validateRegister(userName, email, password, repeatPassword)
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
            <div className="register-container">
                <h2>{register.pageTitle}</h2>
                <form className="register-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>{register.usernameLabel}</label>
                        <input type="text" name='userName' onChange={(e) => setUserName(e.target.value)} placeholder={register.usernameLabel} />
                    </div>
                    <div className="form-group">
                        <label>{register.emailLabel}</label>
                        <input type="email" name='email' onChange={(e) => setEmail(e.target.value)} placeholder={register.emailLabel} />
                    </div>
                    <div className="form-group">
                        <label>{register.passwordLabel}</label>
                        <input type="password" name='password' onChange={(e) => setPassword(e.target.value)} placeholder={register.passwordLabel} />
                    </div>
                    <div className="form-group">
                        <label>{register.passwordLabel}</label>
                        <input type="password" name='repeatPassword' onChange={(e) => setRepeatPassword(e.target.value)} placeholder={register.passwordLabel} />
                    </div>
                    {error && <div className="error-message">{error}</div>}
                    <button type="submit">{register.registerButton}</button>
                </form>
            </div>
        </LayoutPage>
    )
}

export default RegisterPage
