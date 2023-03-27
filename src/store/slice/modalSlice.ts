import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ReactNode } from 'react'

interface modalState {
	active: boolean
	body: ReactNode | null
}

const initialState: modalState = {
	active: false,
	body: null,
}
const modalSlice = createSlice({
	name: 'modal',
	initialState,
	reducers: {
		setModal(state, action: PayloadAction<ReactNode | null>) {
			state.active = !state.active
			state.body = action.payload
		},
	},
})

export const { setModal } = modalSlice.actions
export default modalSlice.reducer
