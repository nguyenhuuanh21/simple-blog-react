import { IconButton, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import { useEffect, useMemo, useState } from 'react'

import { debounce } from '../utils/debounce'
import { useSearchParams } from 'react-router-dom'

const SearchForm = () => {
  const [search, setSearch] = useState('')
  const [searchParams, setSearchParams] = useSearchParams()
  const keyword = searchParams.get("keyword") || ""

  // sync input với URL
  useEffect(() => {
    setSearch(keyword)
  }, [keyword])

  // debounce update URL
  const updateKeyword = useMemo(
    () =>
      debounce((value) => {
        setSearchParams({ keyword: value, page: 1 }) // reset page
      }),
    [setSearchParams]
  )



  const handleChange = (e) => {
    const value = e.target.value
    setSearch(value)
    updateKeyword(value)
  }

  return (
    <form style={{ display: "flex", alignItems: "center", gap: 8, justifyContent: "center", marginBottom: 21 }}>
      <TextField
        variant="outlined"
        placeholder="Search..."
        size="small"
        sx={{ width: '75%' }}
        value={search}
        onChange={handleChange}

      />
      <IconButton >
        <SearchIcon sx={{ color: "blue" }} />
      </IconButton>
    </form>
  )
}

export default SearchForm