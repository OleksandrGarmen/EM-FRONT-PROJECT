import './style.css'
import LayoutPage from '../../../layout/layoutPage'
import { useParams } from 'react-router'
import { getBooks, getAuthors } from '../../../localstorage/localStorageHelper'
import CategoryFilter from '../../../components/Common/Categories/CategoryFilter'
import SubmitButton from '../../../components/Common/Buttons/SubmitButton'
import BookComponent from '../../../components/Common/Book'
import { useCategoryFilter } from '../../../utils/categoryFilter'

import type { Book } from '../../../types/BookType'
import type { Author } from '../../../types/AuthorType'

const BookPage = () => {
    const { id } = useParams<{ id: string }>()
    const books: Book[] = getBooks()
    const book = books.find(book => book.id === Number(id) )
    const authors: Author[] = getAuthors()
    const author = authors.find(authors => authors.id === book?.authorId)

    const {
        selectedCategories,
        filteredItems: filteredBooks,
        handleCategoryChange,
        clearAllCategories,
        hasActiveFilters
    } = useCategoryFilter(books)

    let createdAt = book?.createdAt ? new Date(book.createdAt) : null

    return (
        <LayoutPage>
            <CategoryFilter 
                selectedCategories={selectedCategories}
                onCategoryChange={handleCategoryChange}
            />
            {hasActiveFilters && (
                <button 
                    className="clear-filters-btn"
                    onClick={clearAllCategories}
                >
                    Clear All Filters
                </button>
            )}
            <div className='book-page-container'>
                <div>
                    <img src={book?.image} alt="Book image" />
                </div>
                <div className='book-info-container'>
                    <h2 className='book-info-title'>{book?.title}</h2>
                    <ul className='book-info-list'>
                        <li>Author: {author?.name}</li>
                        <li>{book?.shortDescription}</li>
                        <li>
                            Created At:{" "}
                            {createdAt? createdAt.toLocaleString(): ''}
                        </li>
                        <li>Price: {book?.price}$</li>
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
                { filteredBooks.slice(0, 4).map(element => {
                    return (
                        <BookComponent key={element.id} {...element}>
                            <SubmitButton text='Add to Cart' />
                        </BookComponent>
                    )
                })}
                {filteredBooks.length === 0 && hasActiveFilters && (
                    <div className="no-books-message">
                        No books found for selected categories
                    </div>
                )}
                </div>
            </div>
        </LayoutPage>
    )
}

export default BookPage

