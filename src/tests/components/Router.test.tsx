import React from 'react'
import { act, render, screen } from '@testing-library/react'
import AdminPage from '../../pages/AdminPage'
import { RenderWithRouter } from '../helpers/RenderWithRouter'
import { Provider } from 'react-redux'
import { store } from '../../store/store'
import userEvent from '@testing-library/user-event'
import CartPage from '../../pages/CartPage'
import CatalogPage from '../../pages/CatalogPage'
import ProductPage from '../../pages/ProductPage'

describe('Router', () => {
	beforeAll(() => {
		Element.prototype.scrollIntoView = jest.fn()
	})
	test('Admin ', async () => {
		render(
			<Provider store={store}>
				<RenderWithRouter>
					<AdminPage />
				</RenderWithRouter>
			</Provider>
		)

		await act(() => {
			const adminLink = screen.getByTestId('admin-link')
			userEvent.click(adminLink)
			expect(screen.getByTestId('admin-page')).toBeInTheDocument()
		})
	})
	test('Cart ', async () => {
		render(
			<Provider store={store}>
				<RenderWithRouter>
					<CartPage />
				</RenderWithRouter>
			</Provider>
		)
		await act(() => {
			const cartLink = screen.getByTestId('cart-link')
			userEvent.click(cartLink)
			expect(screen.getByTestId('cart-page')).toBeInTheDocument()
		})
	})
	test('Catalog ', async () => {
		render(
			<Provider store={store}>
				<RenderWithRouter initialRoute={'/cart'}>
					<CatalogPage />
				</RenderWithRouter>
			</Provider>
		)
		act(() => {
			const catalogLink = screen.getByTestId('catalog-link')
			userEvent.click(catalogLink)
			expect(screen.getByTestId('catalog-page')).toBeInTheDocument()
		})
	})
	test('Product ', async () => {
		render(
			<Provider store={store}>
				<RenderWithRouter>
					<ProductPage />
				</RenderWithRouter>
			</Provider>
		)
		await act(() => {
			const productLink = screen.getAllByTestId('product-link')
			userEvent.click(productLink[0])
			expect(screen.getByTestId('product-page')).toBeInTheDocument()
		})
	})
})
