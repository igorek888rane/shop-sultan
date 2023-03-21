import { FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import CatalogPage from '../../pages/CatalogPage/CatalogPage'
import CartPage from '../../pages/CartPage/CartPage'
import ProductPage from '../../pages/ProductPage/ProductPage'
import Layout from '../Layout'

const Main: FC = () => {
	return (
		<Routes>
			<Route path={'/'} element={<Layout />}>
				<Route index element={<CatalogPage />} />
				<Route path={'cart'} element={<CartPage />} />
				<Route path={':id'} element={<ProductPage />} />
			</Route>
		</Routes>
	)
}

export default Main
