import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IProduct } from '../../data/dataTypes'
import data from '../../data/data.json'

interface ProductsState {
	products: IProduct[]
	filterProducts: IProduct[]
}
const initialState: ProductsState = {
	products: data,
	filterProducts: data,
}
const productsSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		setProducts(state, action: PayloadAction<IProduct[]>) {
			state.products = action.payload
		},
		setFilterProducts(state, action: PayloadAction<IProduct[]>) {
			state.filterProducts = action.payload
		},
	},
})

export const { setProducts, setFilterProducts } = productsSlice.actions
export default productsSlice.reducer
