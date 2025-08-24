import type { BookType } from "../../types/BookType"


const Book = (props:BookType) =>{
    return (
            <div className="book">
               <div className="image"><img src={props.image}></img></div>
                <div className="title">{props.title}</div>
                 <div className="author">{props.author}</div>
                 <div className="pageCount">{props.pageCount}</div>
                </div>
    )
}

export default Book