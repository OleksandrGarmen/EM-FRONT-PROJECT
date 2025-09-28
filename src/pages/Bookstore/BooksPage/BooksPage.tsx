import './style.css'
import LayoutPage from '../../../layout/layoutPage'
import BookComponent from '../../../components/Common/Book'
import { getCurrentUser, getFullBooksData } from '../../../localstorage/localStorageHelper'
import SubmitButton from '../../../components/Common/Buttons/SubmitButton'
import CategoryFilter from '../../../components/Common/Categories/CategoryFilter'
import { useCategoryFilter } from '../../../utils/categoryFilter'
import { addBookToCart } from '../../../localstorage/localStorageHelper'
import { useNavigate } from "react-router"
import ModalButton from '../../../components/Common/Modal/ModalButton'
import { useState } from 'react'
import ModalComponent from '../../../components/Common/Modal/ModalWindow'

const BooksPage = () => {
    const books = getFullBooksData()
    const navigate = useNavigate()
    const handleBook = addBookToCart
    const [isModalOpen, setIsModalOpen] = useState(false)
    

    const {
        selectedCategories,
        filteredItems: filteredBooks,
        handleCategoryChange,
        clearAllCategories,
        hasActiveFilters
    } = useCategoryFilter(books)

    

    const handleBookClick = (bookId: number) => {
        if (!getCurrentUser()) {
            navigate(`/register`)
        } else {
            addBookToCart(bookId)
            handleModalOpen()
        }
    }

    const handleModalOpen = () => {
        setIsModalOpen(true)
    }
    
    const handleModalClose = () => {
        setIsModalOpen(false)
    }

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
            <div className='books-container'>
                {
                    filteredBooks.map(element => {
                        return (
                            <BookComponent key={element.id} {...element}>
                                <SubmitButton text='Add to Cart' onClick={() => handleBookClick(element.id)}/>
                            </BookComponent>
                        )
                    })
                }
                {filteredBooks.length === 0 && hasActiveFilters && (
                    <div className="no-books-message">
                        No books found for selected categories
                    </div>
                )}
                {isModalOpen && <ModalComponent isOpen={isModalOpen} onClose={handleModalClose} />}
            </div>
        </LayoutPage>
    )
}

export default BooksPage