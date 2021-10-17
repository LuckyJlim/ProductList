import React, { useState } from 'react';
import { useSelector } from 'react-redux'
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';

const ITEMS_PER_PAGE_8 = 8;
const ITEMS_PER_PAGE_12 = 12;
const ITEMS_PER_PAGE_16 = 16;


const PaginationSelector = () => {
  const page = useSelector((state) => state.page);
  const [age, setAge] = useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl variant="standard">
        <NativeSelect
          defaultValue={ITEMS_PER_PAGE_8}
          labelId="itemsperpage-select"
          id="itemsperpage-select"
          value={age}
          onChange={handleChange}
        >
          <option value={ITEMS_PER_PAGE_8}>{ITEMS_PER_PAGE_8} per page</option>
          <option value={ITEMS_PER_PAGE_12}>{ITEMS_PER_PAGE_12} per page</option>
          <option value={ITEMS_PER_PAGE_16}>{ITEMS_PER_PAGE_16} per page</option>
        </NativeSelect>
      </FormControl>
    </Box>
  );
}

export default PaginationSelector;