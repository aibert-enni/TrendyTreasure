import { ExpandMore } from '@mui/icons-material'
import { Box, Button, FormControl, InputLabel, Menu, MenuItem, Select, SelectChangeEvent, Typography } from '@mui/material'
import React, { FC } from 'react'

interface SortDropdownProps {
    sort: string,
    sortItems: string[],
    onChange: (event: SelectChangeEvent) => void
}

const SortDropdown: FC<SortDropdownProps> = ({ sort, sortItems, onChange }) => {

    return (
        <Box>
            <FormControl sx={{ width: '200px' }}>
                <Select
                    value={sort}
                    onChange={onChange}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}>
                    {sortItems.map(item => <MenuItem value={item} >{item}</MenuItem>)}
                </Select>
            </FormControl>
        </Box >
    )
}

export default SortDropdown