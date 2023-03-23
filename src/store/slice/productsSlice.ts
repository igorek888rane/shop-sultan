import { createSlice } from '@reduxjs/toolkit'
import { IProduct } from '../../data/dataTypes'
import data from '../../data/data.json'

interface ProductsState {
	products: IProduct[]
}
const initialState: ProductsState = {
	products: data,
}
const productsSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {},
})

export const {} = productsSlice.actions
export default productsSlice.reducer
