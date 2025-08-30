import './style.css'
import LayoutPage from '../../../layout/layoutPage'
import BookComponent from '../../../components/Book'
import CategoryComponent from '../../../components/Category'
import { getAuthors, getBooks, getCategories, getFullBooksData } from '../../../localstorage/localStorageHelper'
const allCategories = getCategories()

const BooksPage = () => {
    const books = getFullBooksData()
    return (
        <LayoutPage>
            <div className='categories-container'>
                {
                    allCategories && allCategories.length > 0 
                    ? allCategories.map(item => (
                            <CategoryComponent key={item.id} {...item} />
                        ))
                        : "Категорій немає"
                } 
            </div>
            <div className='books-container'>
                {
                     books.map(element => {
                           
                            return (
                                <BookComponent key={element.id} {...element}>
                                    <button></button>
                                </BookComponent>
                            )
                        })
                }
            </div>
        </LayoutPage>
    )
}

export default BooksPage