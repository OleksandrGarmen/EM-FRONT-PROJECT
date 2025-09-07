import './style.css'
import LayoutPage from '../../../layout/layoutPage'
import BookComponent from '../../../components/Book'
import CategoryComponent from '../../../components/Category'
import { getAuthors, getBooks, getCategories, getFullBooksData } from '../../../localstorage/localStorageHelper'
import { useNavigate } from "react-router"

const BooksPage = () => {

    const allCategories = getCategories()
    const navigate = useNavigate()
    const redirect = (id:number) => {
        navigate(`/book/${id}`)
    }
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
                                    <button onClick={() => redirect(element.id)}>Add to Cars</button>
                                </BookComponent>
                            )
                        })
                }
            </div>
        </LayoutPage>
    )
}

export default BooksPage