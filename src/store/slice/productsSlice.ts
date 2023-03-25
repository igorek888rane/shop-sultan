import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IProduct } from '../../data/dataTypes'

interface ProductsState {
	products: IProduct[]
	filterProducts: IProduct[]
	product: IProduct | null
}

const initialState: ProductsState = {
	products: [],
	filterProducts: [],
	product: null,
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
		setProduct(state, action: PayloadAction<IProduct>) {
			state.product = action.payload
		},
	},
})

export const { setProducts, setFilterProducts, setProduct } =
	productsSlice.actions
export default productsSlice.reducer
