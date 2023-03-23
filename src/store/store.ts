import { configureStore } from '@reduxjs/toolkit'
import cart from './slice/cartSlice'
import product from './slice/productSlice'

export const store = configureStore({
	reducer: {
		cart,
		product,
	},
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
