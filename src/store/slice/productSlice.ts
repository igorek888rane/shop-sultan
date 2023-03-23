import { createSlice } from '@reduxjs/toolkit'
import { IProduct } from '../../data/dataTypes'

interface ProductState {
	product: IProduct[]
}
const initialState: ProductState = {
	product: [],
}
const productSlice = createSlice({
	name: 'product',
	initialState,
	reducers: {},
})

export const {} = productSlice.actions
export default productSlice.reducer
