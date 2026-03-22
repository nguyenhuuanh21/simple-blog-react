import { IconButton, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import { useState } from 'react'
const SearchForm = () => {
  const [search,setSearch]=useState('')
  const handleChange=(e)=>{
    setSearch(e.target.value)
    console.log(search);
  }
  
  
  return (
    <form  style={{ display: "flex", alignItems: "center", gap: 8, justifyContent: "center" ,marginBottom:21 }}>
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