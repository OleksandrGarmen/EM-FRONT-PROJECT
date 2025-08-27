import './style.css'
import LayoutPage from '../../../layout/layoutPage'
import BookComponent from '../../../components/Book'
import CategoryComponent from '../../../components/Category'
import { getAuthors, getBooks, getCategories } from '../../../localstorage/localStorageHelper'

const allBooks = getBooks()
const allAuthors  = getAuthors()
const allCategories = getCategories()

const BooksPage = () => {
    return (
        <LayoutPage>
            <div className='categories'>
                {
                    allCategories && allCategories.length > 0 
                    ? allCategories.map(item => (
                            <CategoryComponent key={item.id} {...item} />
                        ))
                        : "Категорій немає"
                } 
            </div>
            <div className='popular-books'>
                {
                    allBooks && allBooks.length > 0
                        ? allBooks.map(element => {
                            const author = allAuthors.find(a => a.id === element.authorId);
                            return (
                                <BookComponent key={element.id} {...element}>
                                    <div className="author">
                                        {author ? author.name : "Невідомо"}
                                    </div>
                                </BookComponent>
                            )
                        })
                        : "Книжок немає"
                }
            </div>
        </LayoutPage>
    )
}

export default BooksPage