import { configureStore } from '@reduxjs/toolkit'
import cart from './slice/cartSlice'
import products from './slice/productsSlice'
import filter from './slice/filterSlice'
import modal from './slice/modalSlice'
import pagination from './slice/paginationSlice'

export const store = configureStore({
	reducer: {
		cart,
		products,
		filter,
		modal,
		pagination,
	},
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
