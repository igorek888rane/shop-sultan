import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IProduct } from '../../data/dataTypes'

interface ICart extends IProduct {
	amount: number
}

interface CartState {
	cart: ICart[]
}

const initialState: CartState = {
	cart: [],
}

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		setCart(
			state,
			{ payload }: PayloadAction<{ product: IProduct; amount: number }>
		) {
			const product = state.cart.find(
				el => el.barcode === payload.product.barcode
			)
			if (product) {
				state.cart.forEach(el => {
					if (el.barcode === payload.product.barcode) {
						el.amount += payload.amount
					}
				})
				state.cart = state.cart.filter(el => el.amount !== 0)
			} else {
				state.cart = [...state.cart, { ...payload.product, amount: 1 }]
			}
		},
	},
})

export const { setCart } = cartSlice.actions
export default cartSlice.reducer
