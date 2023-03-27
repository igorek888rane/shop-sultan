import { ICart } from '../store/slice/cartSlice'

export const calcValue = (cart: ICart[]) => {
	const totalPrice = cart.reduce(
		(prev, curr) => prev + curr.price * curr.amount,
		0
	)
	const totalCount = cart.reduce((prev, curr) => prev + curr.amount, 0)
	return {
		totalPrice,
		totalCount,
	}
}
