import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import products from '../../data/data.json'

export type itemType = { id: string; name: string }
export type filterType = { name: string; active: boolean }

interface FilterState {
	brand: filterType[]
	manufacturer: filterType[]
	typesCare: itemType[]
	from: string
	to: string
	typeCare: string
	clear: boolean
}

const initialState: FilterState = {
	brand: Array.from(new Set(products.map(el => el.brand))).map(el => ({
		name: el,
		active: false,
	})),
	manufacturer: Array.from(new Set(products.map(el => el.manufacturer))).map(
		el => ({ name: el, active: false })
	),
	typesCare: [
		{
			id: 'body',
			name: 'Уход за телом',
		},
		{
			id: 'hands',
			name: 'Уход за руками',
		},
		{
			id: 'legs',
			name: 'Уход за ногами',
		},
		{
			id: 'face',
			name: 'Уход за лицом',
		},
		{
			id: 'hair',
			name: 'Уход за волосами',
		},
		{
			id: 'tan',
			name: 'Средства для загара',
		},
		{
			id: 'shaving',
			name: 'Средства для бритья',
		},
		{
			id: 'present',
			name: 'Подарочные наборы',
		},
		{
			id: 'hygiene',
			name: 'Гигиеническая продукция',
		},
		{
			id: 'hygiene oral',
			name: 'Гигиена полости рта',
		},
		{
			id: 'paper',
			name: 'Бумажная продукция',
		},
	],
	from: '',
	to: '',
	typeCare: '',
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
			state.typeCare = action.payload
		},
		setClear(state) {
			state.clear = !state.clear
			state.to = ''
			state.from = ''
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
