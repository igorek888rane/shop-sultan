import cartSlice, {
	changeCart,
	clearCart,
	removeItem,
	setCart,
} from '../../store/slice/cartSlice'
import { cartTest, productTest } from '../mock'

describe('cartSlice', () => {
	test('setCart', () => {
		expect(cartSlice({ cart: [] }, setCart(cartTest))).toEqual({
			cart: cartTest,
		})
	})
	test('changeCart plus product', () => {
		expect(
			cartSlice({ cart: [] }, changeCart({ product: productTest, amount: 1 }))
		).toEqual({
			cart: [{ ...productTest, amount: 1 }],
		})
	})
	test('changeCart minus product', () => {
		expect(
			cartSlice(
				{ cart: [{ ...productTest, amount: 1 }] },
				changeCart({ product: productTest, amount: -1 })
			)
		).toEqual({
			cart: [],
		})
	})
	test('removeItem', () => {
		expect(cartSlice({ cart: cartTest }, removeItem('4604049097564'))).toEqual({
			cart: [{ ...productTest, amount: 1 }],
		})
	})
	test('clearCart', () => {
		expect(cartSlice({ cart: cartTest }, clearCart())).toEqual({
			cart: [],
		})
	})
})
