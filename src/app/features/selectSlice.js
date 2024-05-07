import { createSlice } from '@reduxjs/toolkit';

const  initialState = {
  numberOfProduct: 0,
  productId: [],
};

export const cartSlice = createSlice({
  name: "itemInCart",
  initialState,
  reducers: {
    addItemIncart: (state, action) => {
      state.numberOfProduct += 1;
      state.productId.push(action.payload); // Add the productId to the array
    },
    removeItemIncart: (state, action) => {
      state.numberOfProduct -= 1;
      const index = state.productId.indexOf(action.payload);
      if (index !== -1) {
        state.productId.splice(index, 1); // Remove the productId from the array
      }
    }
  }
});

export const { addItemIncart, removeItemIncart}= cartSlice.actions;
export default cartSlice.reducer;
