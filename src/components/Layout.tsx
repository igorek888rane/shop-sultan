import React, { FC, useEffect } from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import { Outlet } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../hooks/useApp'
import { setFilterProducts, setProducts } from '../store/slice/productsSlice'
import data from '../data/data.json'
import { setCart } from '../store/slice/cartSlice'

const Layout: FC = () => {
	const { cart } = useAppSelector(state => state.cart)
	const dispatch = useAppDispatch()
	useEffect(() => {
		const localStorageProducts = localStorage.getItem('products')
		if (localStorageProducts) {
			if (localStorageProducts.length !== data.length) {
				localStorage.setItem('products', JSON.stringify(data))
			}
			dispatch(setProducts(JSON.parse(localStorageProducts as string)))
			dispatch(setFilterProducts(JSON.parse(localStorageProducts as string)))
			return
		}
		localStorage.setItem('products', JSON.stringify(data))
		dispatch(setProducts(data))
		dispatch(setFilterProducts(data))
	}, [])
	useEffect(() => {
		if (localStorage.getItem('cart')) {
			dispatch(setCart(JSON.parse(localStorage.getItem('cart') as string)))
		}
	}, [])
	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cart))
		if (!cart.length) {
			localStorage.removeItem('cart')
		}
	}, [cart])
	return (
		<div className={'App'}>
			<Header />
			<Outlet />
			<Footer />
		</div>
	)
}

export default Layout
