import { useNavigate } from "react-router"
import type {FullBookData } from "../../../types/BookType"
import './style.css'

type BookProps = FullBookData & {
  children?: React.ReactNode
}

const BookComponent = (props:BookProps) => {
  const navigate = useNavigate()

  return (
    <div className="book-container">
      <div onClick={() => navigate(`/books/${props.id}`)}>
        <div className="book-image">
            <img 
              src={props.image}
              loading="lazy"
              decoding="async"
              alt="book image"
            />
        </div>
        <div>
          <div className="about-book">
            <p className="book-title">{props.title}</p>
            <p className="book-author">{props.authorName}</p>
          </div>
        </div> 
      </div>
      <div className="book-children">
        {props.children}
      </div>
    </div>
  )
}


export default BookComponent