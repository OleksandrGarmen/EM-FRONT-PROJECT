import './style.css'

const SearchInput = ({placeholder, backgroudColor = "#DB5408", color = '#fff'} : {placeholder?:string, backgroudColor?:string, color?:string}) => {
    return (
        <input className={`search-input ${backgroudColor || color ? 'custom' : ''}`} placeholder={placeholder}></input>
    )
}

export default SearchInput
