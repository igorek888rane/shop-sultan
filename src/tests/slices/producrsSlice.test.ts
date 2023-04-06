import { products, productTest } from '../mock'
import productsSlice, {
	setFilterProducts,
	setProduct,
	setProducts,
} from '../../store/slice/productsSlice'
import { IProduct } from '../../data/dataTypes'

describe('productSlice', () => {
	test('setProducts', () => {
		expect(
			productsSlice(
				{ products: [], filterProducts: [], product: {} as IProduct },
				setProducts(products)
			)
		).toEqual({
			products,
			filterProducts: [],
			product: {} as IProduct,
		})
	})
	test('setFilterProducts', () => {
		expect(
			productsSlice(
				{ products: [], filterProducts: [], product: {} as IProduct },
				setFilterProducts(products)
			)
		).toEqual({
			products: [],
			filterProducts: products,
			product: {} as IProduct,
		})
	})
	test('setFilterProducts', () => {
		expect(
			productsSlice(
				{ products: [], filterProducts: [], product: {} as IProduct },
				setProduct(productTest)
			)
		).toEqual({
			products: [],
			filterProducts: [],
			product: productTest,
		})
	})
})
