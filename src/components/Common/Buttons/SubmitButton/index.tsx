import './style.css'

const SubmitButton = ({ text, link, backgroudColor = "#DB5408", onClick }: { text: string, link?: string, backgroudColor?: string, onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void }) => {
    return (
        <button
            className={`submit-button ${backgroudColor ? 'custom' : ''}`}
            onClick={onClick}
        >
           <a href={link} className='link'>{text}</a>
        </button>
    )
}

export default SubmitButton
