import { act, render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { createReduxStore } from '../../../store/store'
import Product from '../../../components/Product/Product'
import userEvent from '@testing-library/user-event'
import { productTest } from '../../mock'

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
			<Provider
				store={createReduxStore({ products: { product: productTest } })}
			>
				<Product />
			</Provider>
		)
		const count = getByTestId('count')
		expect(count).toHaveTextContent('0')
		expect(getByTestId('price')).toHaveTextContent('169.9')
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
