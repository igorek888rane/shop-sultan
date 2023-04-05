import { FC } from 'react'
import styles from './Product.module.scss'
import { useAppSelector } from '../../hooks/useApp'
import ProductDescription from './ProductDescription'
import ProductPrice from './ProductPrice'
import ProductItems from './ProductItems'
import ProductCharacteristic from './ProductCharacteristic'
import ProductSize from './ProductSize'

const Product: FC = () => {
	const { product } = useAppSelector(state => state.products)

	return (
		<div className={styles.product}>
			<div className={styles.product__img}>
				<img src={product?.imageUrl.large} alt='' />
			</div>
			<div className={styles.product__info}>
				<p className={styles.product__available}>В наличии</p>
				<p className={styles.product__name}>{product?.name}</p>
				<ProductSize />
				<ProductPrice />
				<ProductItems />
				<ProductCharacteristic />
				<ProductDescription />
			</div>
		</div>
	)
}

export default Product
