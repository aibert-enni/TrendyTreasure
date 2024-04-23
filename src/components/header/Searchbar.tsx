import { Search } from "@mui/icons-material"
import { FilledInput, FormControl, InputAdornment, InputLabel, OutlinedInput } from "@mui/material"

const Searchbar = () => {
    return (
        <FormControl>
            <OutlinedInput type="search" sx={{
                bgcolor: '#F5F5F5', color: '#656565', borderRadius: 2,
            }} placeholder="Search" startAdornment={<InputAdornment position="start"><Search htmlColor="#989898" /></InputAdornment>} />
        </FormControl>
    )
}

export default Searchbar