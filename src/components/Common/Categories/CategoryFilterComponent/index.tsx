import CategoryFilter from "../CategoryFilter"

interface FilterProps {
    selectedCategories: string[]
    handleCategoryChange: (category: string, cheked: boolean) => void
    clearAllCategories: () => void
    hasActiveFilters: boolean
}

const CategorieFilterComponent = ({ 
    selectedCategories, 
    handleCategoryChange, 
    clearAllCategories, 
    hasActiveFilters 
}: FilterProps) => {

    return (
        <div className='filter-container'>
            <CategoryFilter 
                selectedCategories={selectedCategories}
                onCategoryChange={handleCategoryChange}
            />
            {hasActiveFilters && (
                <button 
                    className='clear-filters-btn'
                    onClick={clearAllCategories}
                >
                    Clear All Filters
                </button>
            )}
        </div>
    )
}

export default CategorieFilterComponent
