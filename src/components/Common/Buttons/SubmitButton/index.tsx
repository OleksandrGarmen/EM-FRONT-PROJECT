import { Link } from 'react-router'
import './style.css'

const SubmitButton = ({ text, link, backgroudColor = "#DB5408"} : { text: string, link?:string, backgroudColor?:string }) => {
    return (
        <button className={`submit-button ${backgroudColor ? 'custom' : ''}`} >
           <a href={link} className='link'>{text}</a>
        </button>
    )
}

export default SubmitButton
