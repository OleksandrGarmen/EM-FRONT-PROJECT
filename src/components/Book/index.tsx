import type { BookType } from "../../types/BookType"
import './style.css'

const Book = (props:BookType) =>{
    return (
            <div className="book-container">
                <div className="image">
                    <img src={props.image}></img>
                    <div className="about-book">
                        <p className="book-title">{props.title}</p>
                        <p className="book-children">{props.children}</p>
                        <p className="book-price">$ {props.price}</p>
                    </div>
                </div>
            </div>
    )
}

export default Book