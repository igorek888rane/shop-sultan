import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import products from '../../data/data.json'
export type itemType = { id: string; name: string }

interface FilterState {
	brand: string[]
	manufacturer: string[]
	filterBrand: string[]
	filterManufacturer: string[]
	typesCare: itemType[]
	from: string
	to: string
	typeCare: string
}

const initialState: FilterState = {
	brand: Array.from(new Set(products.map(el => el.brand))),
	manufacturer: Array.from(new Set(products.map(el => el.manufacturer))),
	filterBrand: [],
	filterManufacturer: [],
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
		serFilterManufacturer(state, action: PayloadAction<string>) {
			state.filterManufacturer.push(action.payload)
		},
	},
})

export const { setFrom, setTo, setTypeCare } = filterSlice.actions
export default filterSlice.reducer
