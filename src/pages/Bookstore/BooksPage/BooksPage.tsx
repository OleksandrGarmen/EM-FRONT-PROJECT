import './style.css'
import LayoutPage from '../../../layout/layoutPage'
import BookComponent from '../../../components/Common/Book'
import { getFullBooksData } from '../../../localstorage/localStorageHelper'
import SubmitButton from '../../../components/Common/Buttons/SubmitButton'
import CategoryFilter from '../../../components/Common/Categories/CategoryFilter'
import { useCategoryFilter } from '../../../utils/categoryFilter'

const BooksPage = () => {
    const books = getFullBooksData()
    const {
        selectedCategories,
        filteredItems: filteredBooks,
        handleCategoryChange,
        clearAllCategories,
        hasActiveFilters
    } = useCategoryFilter(books)

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
                                <SubmitButton text='Add to Cart' />
                            </BookComponent>
                        )
                    })
                }
                {filteredBooks.length === 0 && hasActiveFilters && (
                    <div className="no-books-message">
                        No books found for selected categories
                    </div>
                )}
            </div>
        </LayoutPage>
    )
}

export default BooksPage