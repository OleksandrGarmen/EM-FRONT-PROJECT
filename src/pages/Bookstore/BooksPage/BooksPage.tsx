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
            <div>
                {
                    categories ? categories.map(item => {
                        return <Category key={item.id} {...item}/>
                    }) : "Категорій немає"
                } 
                {
                    books ? books.map(element => {
                        return <Book key={element.id} {...element}/>
                    }) : "Книжок немає"
                }
            </div>
        </LayoutPage>
    )
}

export default BooksPage
