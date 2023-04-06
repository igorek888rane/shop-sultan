import { act, render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { createReduxStore } from '../../../store/store'
import Product from '../../../components/Product/Product'
import userEvent from '@testing-library/user-event'

const product = {
	imageUrl: {
		small:
			'https://dostavka.dixy.ru/upload/resize_cache/iblock/300/200_160_1/2000229474.jpg',
		large: 'https://dostavka.dixy.ru/upload/iblock/403/2000229474.jpg',
	},
	name: 'Мицеллярная вода "Garnier"',
	typeSize: 'volume',
	size: '400 ',
	barcode: '4604049097549',
	manufacturer: "L'Oreal",
	brand: 'Garnier',
	description:
		'Нежная мицеллярная вода Garnier «3 в 1» бережно снимает макияж, очищает поры и успокаивает кожу. ',
	price: 450,
	typeCare: ['Уход за лицом'],
}

describe('Product', () => {
	test('render', () => {
		const { getByTestId } = render(
			<Provider store={createReduxStore()}>
				<Product />
			</Provider>
		)
		const productName = getByTestId('product-name')
		expect(productName).toBeInTheDocument()
	})
	test('test count', () => {
		const { getByTestId } = render(
			<Provider store={createReduxStore({ products: { product } })}>
				<Product />
			</Provider>
		)
		const count = getByTestId('count')
		expect(count).toHaveTextContent('0')
		expect(getByTestId('price')).toHaveTextContent('450')
		act(() => {
			userEvent.click(getByTestId('plus'))
		})
		expect(count).toHaveTextContent('1')
		act(() => {
			userEvent.click(getByTestId('minus'))
		})
		expect(count).toHaveTextContent('0')
	})
})
