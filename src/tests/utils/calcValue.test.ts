import { calcValue } from '../../utils/calcValue'
import { cart } from '../mock'

describe('calcValue', () => {
	test('Корректное значение', () => {
		expect(calcValue(cart)).toEqual({ totalPrice: 2450, totalCount: 6 })
	})
	test('Пустой массив', () => {
		expect(calcValue([])).toEqual({ totalPrice: 0, totalCount: 0 })
	})
})
