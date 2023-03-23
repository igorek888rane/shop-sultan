import { createSlice } from '@reduxjs/toolkit'
import { IProduct } from '../../data/dataTypes'

interface CartState {
	cart: IProduct[]
}

const initialState: CartState = {
	cart: [],
}

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {},
})

export const {} = cartSlice.actions
export default cartSlice.reducer
