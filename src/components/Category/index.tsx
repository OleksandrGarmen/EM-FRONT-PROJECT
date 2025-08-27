import type { Category} from "../../types/CategoryType"


const CategoryComponent = (props:Category) =>{
    return (
            <div className="author">
                <div className="name">
                    <input type="checkbox" id="categoryName"/><label htmlFor="categoryName">{props.name}</label>
                    </div>
                </div>
    )
}

export default CategoryComponent