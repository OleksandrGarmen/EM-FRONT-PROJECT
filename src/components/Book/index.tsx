import type { BookType } from "../../types/BookType"

const Book = (props:BookType) =>{
    return (
            <div className="book">
               <div className="image"><img src={props.image}></img></div>
                <div className="title">{props.title}</div>
                <div className="children">{props.children}</div>
                 <div className="pageCount"><p>{props.pageCount} pages</p></div>
                </div>
    )
}

export default Book