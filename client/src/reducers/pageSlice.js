import {createSlice } from '@reduxjs/toolkit';

const initialState = {
  curPage : 1,
  itemsPerPage : 8,
  totalItems : 1000,
};


export const pageSlice = createSlice({
  name: 'page',
  initialState,
  reducers: {
    setCurPage: (state, action) => {state.curPage = action.payload},
    setTotalItems: (state, action) => {state.itemsPerPage = action.payload},
    setItemsPerPage: (state, action) => {state.itemsPerPage = action.payload},
    setPage: (state, action) => {
      return console.log(action.payload)||action.payload}
  },
});

export const { setCurPage, setTotalItems, setItemsPerPage, setPage } = pageSlice.actions;
export const selectPage= (state) => state.curPage;
// export const incrementIfOdd = (amount) => (dispatch, getState) => {
//   const currentValue = selectCount(getState());
//   if (currentValue % 2 === 1) {
//     dispatch(incrementByAmount(amount));
//   }
// };

export default pageSlice.reducer;
