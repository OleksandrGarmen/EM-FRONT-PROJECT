import type { CategoryType} from "../../types/CategoryType"


const Category = (props:CategoryType) =>{
    return (
            <div className="author">
                <div className="name">{props.name}</div>
                </div>
    )
}

export default Category