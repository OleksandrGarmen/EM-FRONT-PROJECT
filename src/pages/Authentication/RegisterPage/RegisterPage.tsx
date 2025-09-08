import './style.css'
import LayoutPage from '../../../layout/layoutPage'
import register from '../../../fixture/register.json'

const RegisterPage = () => {
    return (
        <LayoutPage>
           <div className="register-container">
        <h2>{register.pageTitle}</h2>

    <form className="register-form">
        <div className="form-group">
            <label>{register.usernameLabel}</label>
            <input type="text" placeholder={register.usernameLabel} />
        </div>

        <div className="form-group">
            <label>{register.emailLabel}</label>
            <input type="email" placeholder={register.emailLabel} />
        </div>

        <div className="form-group">
            <label>{register.passwordLabel}</label>
            <input type="password" placeholder={register.passwordLabel} />
        </div>

        <button type="submit">{register.registerButton}</button>
    </form>
</div>

        </LayoutPage>
    )
}

export default RegisterPage
