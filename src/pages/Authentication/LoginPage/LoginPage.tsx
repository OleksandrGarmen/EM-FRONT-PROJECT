import './style.css'
import LayoutPage from '../../../layout/layoutPage'
import login from '../../../fixture/login.json'

const LoginPage = () => {
    return (
        <LayoutPage>
            <div className="login-container">
                <h2>{login.pageTitle}</h2>

                <form className="login-form">
                    <div className="form-group">
                        <label>{login.emailLabel}</label>
                        <input type="email" placeholder={login.emailLabel} />
                    </div>

                    <div className="form-group">
                        <label>{login.passwordLabel}</label>
                        <input type="password" placeholder={login.passwordLabel} />
                    </div>

                    <button type="submit">{login.loginButton}</button>
                </form>
            </div>
        </LayoutPage>
    )
}

export default LoginPage
