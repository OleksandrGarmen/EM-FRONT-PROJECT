import './style.css'

const SubmitButton = ({ text, onClick} : { text: string, onClick?: React.MouseEventHandler<HTMLButtonElement> }) => {
    return (
        <button className='submit-button' onClick={onClick}>
            {text}
        </button>
    )
}

export default SubmitButton
