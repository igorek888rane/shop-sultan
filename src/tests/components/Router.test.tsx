import React from 'react'
import { render, screen } from '@testing-library/react'
import AdminPage from '../../pages/AdminPage'
import { RenderWithRouter } from '../helpers/RenderWithRouter'
import { Provider } from 'react-redux'
import { store } from '../../store/store'
import userEvent from '@testing-library/user-event'
import CartPage from '../../pages/CartPage'
import CatalogPage from '../../pages/CatalogPage'
import ProductPage from '../../pages/ProductPage'

describe('Router', () => {
	// test('Admin ', () => {
	// 	render(
	// 		<Provider store={store}>
	// 			<RenderWithRouter>
	// 				<AdminPage />
	// 			</RenderWithRouter>
	// 		</Provider>
	// 	)
	// 	const adminLink = screen.getByTestId('admin-link')
	// 	userEvent.click(adminLink)
	// 	expect(screen.getByTestId('admin-page')).toBeInTheDocument()
	// })
	// test('Cart ', () => {
	// 	render(
	// 		<Provider store={store}>
	// 			<RenderWithRouter>
	// 				<CartPage />
	// 			</RenderWithRouter>
	// 		</Provider>
	// 	)
	// 	const cartLink = screen.getByTestId('cart-link')
	// 	userEvent.click(cartLink)
	// 	expect(screen.getByTestId('cart-page')).toBeInTheDocument()
	// })
	// test('Catalog ', () => {
	// 	render(
	// 		<Provider store={store}>
	// 			<RenderWithRouter initialRoute={'/cart'}>
	// 				<CatalogPage />
	// 			</RenderWithRouter>
	// 		</Provider>
	// 	)
	// 	const catalogLink = screen.getByTestId('catalog-link')
	// 	userEvent.click(catalogLink)
	// 	expect(screen.getByTestId('catalog-page')).toBeInTheDocument()
	// })
	// test('Product ', () => {
	// 	render(
	// 		<Provider store={store}>
	// 			<RenderWithRouter>
	// 				<ProductPage />
	// 			</RenderWithRouter>
	// 		</Provider>
	// 	)
	// 	const productLink = screen.getAllByTestId('product-link')
	// 	userEvent.click(productLink[0])
	// 	expect(screen.getByTestId('product-page')).toBeInTheDocument()
	// })
})
