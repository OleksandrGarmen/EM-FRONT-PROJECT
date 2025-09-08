import SubmitButton from '../Buttons/SubmitButton'
import './style.css'

const SignupBanner = () => {
    return (
        <div className='signup-banner'>
            <h2 className='signup-text'>Sign Up For Our new collection</h2>
            <div className='signup-button-container'>
                <SubmitButton text='Sign Up' />
            </div>
        </div>
    )
}

export default SignupBanner
