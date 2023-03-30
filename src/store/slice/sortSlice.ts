import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface sortState {
	sortName: string
	sortBy: string
}

const initialState: sortState = {
	sortName: 'name',
	sortBy: 'desc',
}

const sortSlice = createSlice({
	name: 'sort',
	initialState,
	reducers: {
		setSortName(state, action: PayloadAction<string>) {
			state.sortName = action.payload
		},
		setSortBy(state, action: PayloadAction<string>) {
			state.sortBy = action.payload
		},
	},
})

export const { setSortName, setSortBy } = sortSlice.actions
export default sortSlice.reducer
