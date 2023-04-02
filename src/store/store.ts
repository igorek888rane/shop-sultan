import { configureStore } from '@reduxjs/toolkit'
import cart from './slice/cartSlice'
import products from './slice/productsSlice'
import filter from './slice/filterSlice'
import sort from './slice/sortSlice'
import modal from './slice/modalSlice'
import pagination from './slice/paginationSlice'
import admin from './slice/adminSlice'

export const store = configureStore({
	reducer: {
		cart,
		products,
		filter,
		sort,
		modal,
		pagination,
		admin
	},
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
