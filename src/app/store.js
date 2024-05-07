import { configureStore } from '@reduxjs/toolkit'
import { cartSlice } from './features/selectSlice.js'

export const store = configureStore({
  reducer: {
    cartItem: cartSlice.reducer,
  },
})
