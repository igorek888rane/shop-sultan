import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import products from '../../data/data.json'

interface FilterState {
	brand: string[]
	manufacturer: string[]
	from: string
	to: string
	typeCare: string
}

const initialState: FilterState = {
	brand: Array.from(new Set(products.map(el => el.brand))),
	manufacturer: Array.from(new Set(products.map(el => el.manufacturer))),
	from: '',
	to: '',
	typeCare: '',
}

const filterSlice = createSlice({
	name: 'filter',
	initialState,
	reducers: {
		setFrom(state, action: PayloadAction<string>) {
			state.from = action.payload
		},
		setTo(state, action: PayloadAction<string>) {
			state.to = action.payload
		},
		setTypeCare(state, action: PayloadAction<string>) {
			state.typeCare = action.payload
		},
	},
})

export const { setFrom, setTo, setTypeCare } = filterSlice.actions
export default filterSlice.reducer
