import { combineReducers, configureStore } from '@reduxjs/toolkit'
import cart from './slice/cartSlice'
import products from './slice/productsSlice'
import filter from './slice/filterSlice'
import sort from './slice/sortSlice'
import modal from './slice/modalSlice'
import pagination from './slice/paginationSlice'
import admin from './slice/adminSlice'

const rootReducer = combineReducers({
	cart,
	products,
	filter,
	sort,
	modal,
	pagination,
	admin,
})

export const createReduxStore = (initialState = {}) => {
	return configureStore({
		reducer: rootReducer,
		preloadedState: initialState,
	})
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof createReduxStore>
export type AppDispatch = AppStore['dispatch']
