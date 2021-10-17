import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import { setItemsPerPage } from '../reducers/pageSlice'

const ITEMS_PER_PAGE_8 = 8;
const ITEMS_PER_PAGE_12 = 12;
const ITEMS_PER_PAGE_16 = 16;


const PaginationSelector = () => {
  const {itemPerPage} = useSelector((state) => state.page);
  const dispatch = useDispatch();

  const handleChange = (event) => {
     dispatch( 
      setItemsPerPage(event.target.value));
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl variant="standard">
        <NativeSelect
          defaultValue={itemPerPage}
          labelId="itemsperpage-select"
          id="itemsperpage-select"
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