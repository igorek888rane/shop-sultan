import { configureStore } from '@reduxjs/toolkit'
import cart from './slice/cartSlice'
import products from './slice/productsSlice'
import filter from './slice/filterSlice'
import modal from './slice/modalSlice'

export const store = configureStore({
	reducer: {
		cart,
		products,
		filter,
		modal,
	},
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
