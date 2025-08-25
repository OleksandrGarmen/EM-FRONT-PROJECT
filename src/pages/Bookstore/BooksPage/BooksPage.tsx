import './style.css'
import LayoutPage from '../../../layout/layoutPage'
import Book from '../../../components/Book'
import Category from '../../../components/Category'
import books from '../../../fixture/books.json'
import categories from '../../../fixture/categories.json'

const BooksPage = () => {
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
                        return <Book key={element.id} {...element} />
                    }) : "Книжок немає"
                }
            </div>
        </LayoutPage>
    )
}

export default BooksPage
