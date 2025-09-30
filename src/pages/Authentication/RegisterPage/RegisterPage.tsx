import './style.css'
import LayoutPage from '../../../layout/layoutPage'
import register from '../../../fixture/register.json'
import { validateRegister } from '../../../utils/RegistrationValidation'
import React from 'react'
import { saveToLocalStorage, getFromLocalStorage } from '../../../localstorage/localStorageHelper' 
import { UserType } from '../../../types/UserType'

const RegisterPage = () => {
    const [userName, setUserName] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [repeatPassword, setRepeatPassword] = React.useState('')
    const [error, setError] = React.useState<string | null>(null)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        let isValid = validateRegister(userName, email, password, repeatPassword)
        if (isValid) {
            setError(isValid)
            return
        }
        setError(null)
        console.log('Success')
        
        const existingUsers = getFromLocalStorage<UserType[]>("users", [])
        const newUserId = existingUsers.length > 0 ? 
            Math.max(...existingUsers.map(u => u.id)) + 1 : 1

        const newUser: UserType = {
            id: newUserId,
            name: userName,
            email: email,
            password: password,
        }

        const updatedUsers = [...existingUsers, newUser]
        saveToLocalStorage("users", updatedUsers)
        
        saveToLocalStorage("currentUser", newUser)
    }

    return (
        <LayoutPage>
            <div className="register-container">
                <h2>{register.pageTitle}</h2>
                <form className="register-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>{register.usernameLabel}</label>
                        <input type="text" name='userName' onChange={(e) => setUserName(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>{register.emailLabel}</label>
                        <input type="email" name='email' onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>{register.passwordLabel}</label>
                        <input type="password" name='password' onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label>{register.passwordLabel}</label>
                        <input type="password" name='repeatPassword' onChange={(e) => setRepeatPassword(e.target.value)} />
                    </div>
                    {error && <div className="error-message">{error}</div>}
                    <button type="submit">{register.registerButton}</button>
                </form>
            </div>
        </LayoutPage>
    )
}

export default RegisterPage
