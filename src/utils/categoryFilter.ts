import { useState, useMemo } from 'react'

export type FilterableItem = {
  categoryId: number
}

export const useCategoryFilter = <Type extends FilterableItem>(items: Type[]) => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])

  const filteredItems = useMemo(() => {
    if (selectedCategories.length === 0) {
      return items
    }
    
    return items.filter(item => 
      selectedCategories.includes(item.categoryId.toString())
    )
  }, [items, selectedCategories])

  const handleCategoryChange = (categoryId: string, checked: boolean) => {
    setSelectedCategories(prev => {
      if (checked) {
        return [...prev, categoryId]
      } else {
        return prev.filter(id => id !== categoryId)
      }
    })
  }

  const clearAllCategories = () => {
    setSelectedCategories([])
  }

  const selectAllCategories = (categoryIds: string[]) => {
    setSelectedCategories(categoryIds)
  }

  return {
    selectedCategories,
    filteredItems,
    handleCategoryChange,
    clearAllCategories,
    selectAllCategories,
    hasActiveFilters: selectedCategories.length > 0,
    selectedCount: selectedCategories.length
  }
}
