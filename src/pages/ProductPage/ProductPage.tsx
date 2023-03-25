import { FC, useEffect } from 'react'
import styles from './ProductPage.module.scss'
import { Link, useParams } from 'react-router-dom'
import { setProduct } from '../../store/slice/productsSlice'
import { useAppDispatch, useAppSelector } from '../../hooks/useApp'
import Product from '../../components/Product/Product'

const ProductPage: FC = () => {
	const { id } = useParams()
	const dispatch = useAppDispatch()
	const { products } = useAppSelector(state => state.products)
	const product = products.find(el => el.barcode === id)
	useEffect(() => {
		if (product) {
			dispatch(setProduct(product))
		}
	}, [])
	return (
		<main className={styles.product__page}>
			<div className={'content'}>
				<div className={'path'}>
					<p>Главная</p>
					<Link to={'/'}>Каталог</Link>
					<p className={'path__here'}>{product?.name}</p>
				</div>
				<Product />
			</div>
		</main>
	)
}

export default ProductPage
