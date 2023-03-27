import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import products from '../../data/data.json'

export type itemType = { name: string; active: boolean }
export type filterType = { name: string; active: boolean }

interface FilterState {
	brand: filterType[]
	manufacturer: filterType[]
	typesCare: itemType[]
	from: string
	to: string
	clear: boolean
}
let typesCare: string[] = []

products.forEach(el => el.typeCare.forEach(el => typesCare.push(el)))

const initialState: FilterState = {
	brand: Array.from(new Set(products.map(el => el.brand))).map(el => ({
		name: el,
		active: false,
	})),
	manufacturer: Array.from(new Set(products.map(el => el.manufacturer))).map(
		el => ({ name: el, active: false })
	),
	typesCare: Array.from(new Set(typesCare)).map(el => ({
		name: el,
		active: false,
	})),
	from: '0',
	to: Math.max(...products.map(el => el.price)) + '',
	clear: false,
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
			state.typesCare.forEach(item => {
				if (item.name === action.payload) {
					item.active = !item.active
				}
			})
		},
		setClear(state) {
			state.clear = !state.clear
			state.from = '0'
			state.to = Math.max(...products.map(el => el.price)) + ''
			state.brand.forEach(el => (el.active = false))
			state.manufacturer.forEach(el => (el.active = false))
		},
		setFilter(
			state,
			{
				payload,
			}: PayloadAction<{ filter: string; active: boolean; name: string }>
		) {
			switch (payload.name) {
				case 'manufacturer':
					state.manufacturer.forEach(el => {
						if (el.name === payload.filter) {
							el.active = payload.active
						}
					})
					break
				case 'brand':
					state.brand.forEach(el => {
						if (el.name === payload.filter) {
							el.active = payload.active
						}
					})
					break
			}
		},
	},
})

export const { setFrom, setTo, setTypeCare, setFilter, setClear } =
	filterSlice.actions
export default filterSlice.reducer
