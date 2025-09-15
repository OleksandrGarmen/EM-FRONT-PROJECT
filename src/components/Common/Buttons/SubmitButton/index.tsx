import { Link } from 'react-router'
import './style.css'

const SubmitButton = ({ text, link, backgroudColor = "#DB5408", onclick }: { text: string, link?: string, backgroudColor?: string, onclick?: (e: React.MouseEvent<HTMLButtonElement>) => void }) => {
    return (
        <button
            className={`submit-button ${backgroudColor ? 'custom' : ''}`}
            onClick={onclick}
        >
           <a href={link} className='link'>{text}</a>
        </button>
    )
}

export default SubmitButton
