import type { CategoryType} from "../../types/CategoryType"


const Category = (props:CategoryType) =>{
    return (
            <div className="author">
                <div className="name">
                    <input type="checkbox" id="categoryName"/><label htmlFor="categoryName">{props.name}</label>
                    </div>
                </div>
    )
}

export default Category