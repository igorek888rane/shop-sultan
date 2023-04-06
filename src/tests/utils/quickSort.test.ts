import { quickSort } from '../../utils/quickSort'
import { products, productsSortName, productsSortPrice } from '../mock'

describe('calcValue', () => {
	test('По названию ', () => {
		expect(quickSort(products, 'name')).toEqual(productsSortName)
	})
	test('По цене', () => {
		expect(quickSort(products, 'price')).toEqual(productsSortPrice)
	})
	test('Пустой массив', () => {
		expect(quickSort([], '')).toEqual([])
	})
})
