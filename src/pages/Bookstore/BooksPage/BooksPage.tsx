import './style.css'
import LayoutPage from '../../../layout/layoutPage'
import { getBooks, getCategories } from '../../../localstorage/localStorageHelper'
import Book from '../../../components/Book'
import Category from '../../../components/Category'

const BooksPage = () => {
    const books = getBooks()
    const categories = getCategories()
    return (
        <LayoutPage>
            <div className='categories'>
                {
                    categories ? categories.map(item => {
                        return <Category key={item.id} {...item}/>
                    }) : "Категорій немає"
                } 
                </div>
                <div className='books'>
                {
                    books ? books.map(element => {
                        return <Book key={element.id} {...element}>
                        </Book>
                    }) : "Книжок немає"
                
                }
            </div>
        </LayoutPage>
    )
}

export default BooksPage
