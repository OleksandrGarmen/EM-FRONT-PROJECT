import './style.css'
import LayoutPage from '../../../layout/layoutPage'
import { useParams } from 'react-router'
import { getBooks } from '../../../localstorage/localStorageHelper'
import type { Book } from '../../../types/BookType'

const BookPage = () => {
    const { id } = useParams<{ id: string }>()
    const books: Book[] = getBooks()
    const book = books.find(book => book.id === Number(id) )

    return (
        <LayoutPage>
            <div>
                <div>
                    <img src={book?.image} alt="Book image" />
                </div>
                <div>
                    <h2>{book?.title}</h2>
                    <ul>
                        <li></li>
                        <li>{book?.shortDescription}</li>
                        <li>{book?.createdAt}</li>
                        <li>{book?.price}</li>
                        <li>{book?.price}</li>
                        <li>{book?.price}</li>
                    </ul>
                </div>
            </div>
        </LayoutPage>
    )
}

export default BookPage

