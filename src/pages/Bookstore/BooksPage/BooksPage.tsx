import './style.css'
import LayoutPage from '../../../layout/layoutPage'
import Book from '../../../components/Book'
import Category from '../../../components/Category'
import { getAuthors, getBooks, getCategories } from '../../../localstorage/localStorageHelper'
import { AuthorType } from '../../../types/AuthorType'
import { CategoryType } from '../../../types/CategoryType'
import { BookType } from '../../../types/BookType'

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
                            <Category key={item.id} {...item} />
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
                                <Book key={element.id} {...element}>
                                    <div className="author">
                                        {author ? author.name : "Невідомо"}
                                    </div>
                                </Book>
                            )
                        })
                        : "Книжок немає"
                }
            </div>
        </LayoutPage>
    )
}

export default BooksPage