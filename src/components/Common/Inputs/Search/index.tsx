import './style.css'

const SearchInput = ({placeholder} : {placeholder?:string}) => {
    return (
        <input className="search-input" placeholder={placeholder}></input>
    )
}

export default SearchInput
