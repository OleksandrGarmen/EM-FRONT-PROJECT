import { getCategories } from '../../../../localstorage/localStorageHelper'
import CategoryComponent from '../CategoriesContainer/Сategories'
import './style.css'

const CategoryFilter = () => {
    const allCategories = getCategories()
        

    return (
        <div className='categories-container'>
            {
                allCategories && allCategories.length > 0 
                ? allCategories.map(item => (
                    <CategoryComponent key={item.id} {...item} />
                ))
                    : "Категорій немає"
                } 
        </div>
    )
}

export default CategoryFilter
