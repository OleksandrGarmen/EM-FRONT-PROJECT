

type BooksType = {
image:string;
title:string;
children:React.ReactNode;
pageCount:number;
}

const Book = (props:BooksType) =>{
    return (
            <div className="book">
               <div className="image"><img src={props.image}></img></div>
                <div className="title">{props.title}</div>
                 <div className="author">{props.children}</div>
                 <div className="pageCount">{props.pageCount}</div>
                </div>
    )
}

export default Book