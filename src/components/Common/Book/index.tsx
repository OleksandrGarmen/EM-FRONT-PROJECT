import { useNavigate } from "react-router"
import type {FullBookData } from "../../../types/BookType"
import './style.css'

type BookProps = FullBookData & {
  children?: React.ReactNode
}

const BookComponent = (props:BookProps) => {
  const navigate = useNavigate()

  return (
    <div className="book-container" onClick={() => navigate(`/books/${props.id}`)}>
        <div className="image">
            <img src={props.image}></img>
            <div className="about-book">
              <div>
                <p className="book-title">{props.title}</p>
                <p className="book-author">{props.authorName}</p>
              </div>
              <div className="book-children">
                {props.children}
              </div>
            </div>
        </div>
    </div>
  )
}


export default BookComponent