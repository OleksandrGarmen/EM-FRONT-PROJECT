import type {FullBookData } from "../../types/BookType"
import './style.css'
type FullBookComponent = FullBookData & {
    children:React.ReactNode
}
const BookComponent = (props:FullBookComponent) => {
    return (
            <div className="book-container">
                <div className="image">
                    <img src={props.image}></img>
                    <div className="about-book">
                        <p className="book-title">{props.title}</p>
                        <p className="book-author">{props.authorName}</p>
                        {props.children}
                    </div>
                </div>
            </div>
    )
}

export default BookComponent