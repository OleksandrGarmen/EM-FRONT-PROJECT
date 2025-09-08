import './style.css'
import LayoutPage from '../../../layout/layoutPage'
import BookComponent from '../../../components/Common/Book'
import { getFullBooksData } from '../../../localstorage/localStorageHelper'
import SubmitButton from '../../../components/Common/Buttons/SubmitButton'
import CategoryFilter from '../../../components/Common/Categories/CategoryFilter'

const BooksPage = () => {
    const books = getFullBooksData()
    return (
        <LayoutPage>
            <CategoryFilter />
            <div className='books-container'>
                {
                    books.map(element => {
                        return (
                            <BookComponent key={element.id} {...element}>
                                <SubmitButton text='Add to Cart' />
                            </BookComponent>
                        )
                    })
                }
            </div>
        </LayoutPage>
    )
}

export default BooksPage