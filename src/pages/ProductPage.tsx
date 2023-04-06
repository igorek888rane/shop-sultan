import { FC, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { setProduct } from '../store/slice/productsSlice'
import { useAppDispatch, useAppSelector } from '../hooks/useApp'
import Product from '../components/Product/Product'
import Path from '../components/Path/Path'

const ProductPage: FC = () => {
	const { id } = useParams()
	const dispatch = useAppDispatch()
	const { products } = useAppSelector(state => state.products)
	const product = products.find(el => el.barcode === id)
	useEffect(() => {
		if (product) {
			dispatch(setProduct(product))
		}
	}, [product])
	return (
		<main data-testid='product-page'>
			<div className={'content'}>
				<Path name={product?.name} to={'/'} nameLink={'Каталог'} />
				<Product />
			</div>
		</main>
	)
}

export default ProductPage
