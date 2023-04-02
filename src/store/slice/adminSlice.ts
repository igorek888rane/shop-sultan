import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IProduct } from '../../data/dataTypes'
import data from '../../data/data.json'

interface AdminState {
	items: IProduct[]
}

const initialState: AdminState = {
	items: localStorage.getItem('products')
		? JSON.parse(localStorage.getItem('products') as string)
		: data,
}

const AdminSlice = createSlice({
	name: 'admin',
	initialState,
	reducers: {
		setItems(state, action: PayloadAction<IProduct[]>) {
			state.items = action.payload
			localStorage.setItem('products', JSON.stringify(state.items))
		},

		addItem(state, action: PayloadAction<IProduct>) {
			state.items = [...state.items, action.payload]
			localStorage.setItem('products', JSON.stringify(state.items))
		},
		deleteItem(state, action: PayloadAction<string>) {
			state.items = state.items.filter(item => item.barcode != action.payload)
			localStorage.setItem('products', JSON.stringify(state.items))
		},
		updateItem(state, { payload }: PayloadAction<IProduct>) {
			state.items.forEach((item, i) => {
				if (item.barcode === payload.barcode) {
					state.items[i] = payload
				}
			})
			localStorage.setItem('products', JSON.stringify(state.items))
		},
		clearItems(state) {
			state.items = []
			localStorage.removeItem('products')
		},
	},
})

export const { setItems, addItem, deleteItem, updateItem, clearItems } =
	AdminSlice.actions
export default AdminSlice.reducer
