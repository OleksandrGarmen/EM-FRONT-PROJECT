import { useState } from "react"
import { getCategories } from "../../../../localstorage/localStorageHelper"
import {Select, MenuItem, Checkbox, ListItemText, FormControl, InputLabel, OutlinedInput} from "@mui/material"

type CategoryFilterProps = {
  selectedCategories: string[]
  onCategoryChange: (categoryId: string, checked: boolean) => void
}

const CategoryFilter = ({
  selectedCategories,
  onCategoryChange,
}: CategoryFilterProps) => {
  const allCategories = getCategories()
  const [open, setOpen] = useState(false)

  const handleChange = (event: any) => {
    const value = event.target.value
    const lastSelected = value[value.length - 1]

    onCategoryChange(lastSelected, !selectedCategories.includes(lastSelected))
  }

  return (
    <FormControl fullWidth>
      <InputLabel id="category-label">Категорії</InputLabel>
      <Select
        labelId="category-label"
        multiple
        value={selectedCategories}
        onChange={handleChange}
        input={<OutlinedInput label="Категорії" />}
        renderValue={(selected) =>
          allCategories
            ?.filter((c) => selected.includes(c.id.toString()))
            .map((c) => c.name)
            .join(", ")
        }
        open={open}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        sx={{
            "&.Mui-selected": {
                backgroundColor: "#e98d58",
                color: "white",
            },
            "&.Mui-selected:hover": {
                backgroundColor: "primary.main",
            },
            "&:hover": {
                backgroundColor: "grey.200",
            },
        }}
      >
        {allCategories?.map((item) => (
          <MenuItem key={item.id} value={item.id.toString()}
            onClick={() => {
              const id = item.id.toString()
              const isChecked = !selectedCategories.includes(id)
              onCategoryChange(id, isChecked)
            }}
          >
            <Checkbox
            checked={selectedCategories.includes(item.id.toString())}
            sx={{
                color: "grey.500",
                "&.Mui-checked": {
                color: "#e98d58",
                },
            }}
            />
            <ListItemText primary={item.name} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

export default CategoryFilter
