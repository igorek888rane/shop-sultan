import { FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import CatalogPage from '../../pages/CatalogPage'
import CartPage from '../../pages/CartPage'
import ProductPage from '../../pages/ProductPage'
import Layout from '../Layout'
import AdminPage from "../../pages/AdminPage";

const Main: FC = () => {
	return (
		<Routes>
			<Route path={'/'} element={<Layout />}>
				<Route index element={<CatalogPage />} />
				<Route path={'cart'} element={<CartPage />} />
				<Route path={':id'} element={<ProductPage />} />
				<Route path={'admin'} element={<AdminPage />} />
			</Route>
		</Routes>
	)
}

export default Main
