import React from 'react'
import { act, render, screen } from '@testing-library/react'
import AdminPage from '../../pages/AdminPage'
import { RenderWithRouter } from '../helpers/RenderWithRouter'
import { Provider } from 'react-redux'
import { createReduxStore } from '../../store/store'
import userEvent from '@testing-library/user-event'
import CartPage from '../../pages/CartPage'
import CatalogPage from '../../pages/CatalogPage'
import ProductPage from '../../pages/ProductPage'

describe('Router', () => {
	beforeAll(() => {
		Element.prototype.scrollIntoView = jest.fn()
	})
	test('Admin ', () => {
		render(
			<Provider store={createReduxStore()}>
				<RenderWithRouter>
					<AdminPage />
				</RenderWithRouter>
			</Provider>
		)

		act(() => {
			const adminLink = screen.getByTestId('admin-link')
			userEvent.click(adminLink)
			expect(screen.getByTestId('admin-page')).toBeInTheDocument()
		})
	})
	test('Cart ', () => {
		render(
			<Provider store={createReduxStore()}>
				<RenderWithRouter>
					<CartPage />
				</RenderWithRouter>
			</Provider>
		)
		act(() => {
			const cartLink = screen.getByTestId('cart-link')
			userEvent.click(cartLink)
			expect(screen.getByTestId('cart-page')).toBeInTheDocument()
		})
	})
	test('Catalog ', () => {
		render(
			<Provider store={createReduxStore()}>
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
	test('Product ', () => {
		render(
			<Provider store={createReduxStore()}>
				<RenderWithRouter>
					<ProductPage />
				</RenderWithRouter>
			</Provider>
		)
		act(() => {
			const productLink = screen.getAllByTestId('product-link')
			userEvent.click(productLink[0])
			expect(screen.getByTestId('product-page')).toBeInTheDocument()
		})
	})
})
