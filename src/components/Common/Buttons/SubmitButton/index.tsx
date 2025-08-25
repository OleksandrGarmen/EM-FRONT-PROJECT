import './style.css'

const SubmitButton = ({ text, onClick, backgroudColor = "#DB5408"} : { text: string, onClick?: React.MouseEventHandler<HTMLButtonElement>, backgroudColor?:string }) => {
    return (
        <button className={`submit-button ${backgroudColor ? 'custom' : ''}`} onClick={onClick}>
            {text}
        </button>
    )
}

export default SubmitButton
