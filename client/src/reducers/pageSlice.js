import {createSlice } from '@reduxjs/toolkit';

const DEFAULT_CUR_PAGE = 1;
const DEFAULT_PER_PAGE = 8;

const initialState = {
  curPage : DEFAULT_CUR_PAGE,
  itemsPerPage : DEFAULT_PER_PAGE,
  totalItems : 0,
};

export const pageSlice = createSlice({
  name: 'page',
  initialState,
  reducers: {
    setCurPage: (state, action) => {state.curPage = action.payload},
    setTotalItems: (state, action) => {state.itemsPerPage = action.payload},
    setItemsPerPage: (state, action) => {state.itemsPerPage = action.payload},
  }
});

export const { setCurPage, setTotalItems, setItemsPerPage} = pageSlice.actions;
export const selectPage= (state) => state.curPage;

export default pageSlice.reducer;
