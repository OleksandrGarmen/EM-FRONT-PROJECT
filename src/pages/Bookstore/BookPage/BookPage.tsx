import './style.css'
import LayoutPage from '../../../layout/layoutPage'
import { useParams } from 'react-router'
import { getBooks, getAuthors } from '../../../localstorage/localStorageHelper'
import CategoryFilter from '../../../components/Common/Categories/CategoryFilter'
import SubmitButton from '../../../components/Common/Buttons/SubmitButton'
import BookComponent from '../../../components/Common/Book'

import type { Book } from '../../../types/BookType'
import type { Author } from '../../../types/AuthorType'

const BookPage = () => {
    const { id } = useParams<{ id: string }>()
    const books: Book[] = getBooks()
    const book = books.find(book => book.id === Number(id) )
    const authors: Author[] = getAuthors()
    const author = authors.find(authors => authors.id === book?.authorId)

    return (
        <LayoutPage>
            <CategoryFilter />
            <div className='book-page-container'>
                <div>
                    <img src={book?.image} alt="Book image" />
                </div>
                <div className='book-info-container'>
                    <h2 className='book-info-title'>{book?.title}</h2>
                    <ul className='book-info-list'>
                        <li>{author?.name}</li>
                        <li>{book?.shortDescription}</li>
                        <li>{book?.createdAt}</li>
                        <li>{book?.price}</li>
                        <li><SubmitButton text='Add to Cart' /></li>
                    </ul>
                </div>
            </div>
            <div className='book-desctipton-container'>
                <h2 className='book-desctipton-title'>Book Description</h2>
                <p className='book-description-text'>{book?.description}</p>
            </div>
            <div className='book-desctipton-container'>
                <h2 className='book-desctipton-title book-description-text-release'>New Released</h2>
                <div className='popular-books'>
                { books.slice(0, 4).map(element => {
                    return (
                        <BookComponent key={element.id} {...element}>
                            <SubmitButton text='Add to Cart' />
                        </BookComponent>
                    )
                })}
                </div>
            </div>
        </LayoutPage>
    )
}

export default BookPage

