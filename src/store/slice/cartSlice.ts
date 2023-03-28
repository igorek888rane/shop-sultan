import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IProduct } from '../../data/dataTypes'

export interface ICart extends IProduct {
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
		setCart(state, action: PayloadAction<ICart[]>) {
			state.cart = action.payload
		},
		changeCart(
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

			// localStorage.setItem('cart', JSON.stringify(state.cart))
		},
		removeItem(state, action: PayloadAction<string>) {
			state.cart = state.cart.filter(item => item.barcode !== action.payload)
			// localStorage.setItem('cart', JSON.stringify(state.cart))
		},
		clearCart(state) {
			state.cart = []
			// localStorage.removeItem('cart')
		},
	},
})

export const { setCart, changeCart, removeItem, clearCart } = cartSlice.actions
export default cartSlice.reducer
