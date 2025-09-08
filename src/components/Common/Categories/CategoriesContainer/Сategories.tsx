import type { Category } from "../../../../types/CategoryType"

const CategoryComponent = (props:Category) =>{
    return (
        <div className="author">
            <div className="name">
                <input type="checkbox" id={(props.id).toString()}/>
                <label htmlFor={(props.id).toString()}>{props.name}</label>
            </div>
        </div>
    )
}

export default CategoryComponent