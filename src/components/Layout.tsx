import React, { FC } from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import { Outlet } from 'react-router-dom'

const Layout: FC = () => {
	return (
		<div className={'App'}>
			<Header />
			<Outlet />
			<Footer />
		</div>
	)
}

export default Layout
