import type { Category } from "../../../../types/CategoryType"

type CategoryProps = Category & {
  checked?: boolean
  onChange?: (id: string, checked: boolean) => void
}

const CategoryComponent = (props: CategoryProps) => {
  return (
    <div className="author">
      <div className="name">
        <input 
          type="checkbox" 
          id={props.id.toString()}
          checked={props.checked}
          onChange={(e) => props.onChange?.(props.id.toString(), e.target.checked)}
        />
        <label htmlFor={props.id.toString()}>{props.name}</label>
      </div>
    </div>
  )
}

export default CategoryComponent