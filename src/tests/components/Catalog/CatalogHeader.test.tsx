import React from 'react'
import { render, screen } from '@testing-library/react'
import CatalogHeader from '../../../components/Catalog/CatalogHeader'

describe('Product', () => {
	const show = false
	test('render ', () => {
		render(
			<CatalogHeader
				header={'Header'}
				showFilter={show}
				setShowFilter={show => !show}
			/>
		)
		const headerElement = screen.getByText(/Header/i)
		expect(headerElement).toBeInTheDocument()
		expect(headerElement).toMatchSnapshot()
	})
})
