import { FC } from 'react'
import styles from './Product.module.scss'
import { useAppSelector } from '../../hooks/useApp'
import volume from '../../img/catalog/volume.png'
import weight from '../../img/catalog/weight.png'

const ProductSize: FC = () => {
	const { product } = useAppSelector(state => state.products)

	return (
		<div className={styles.product__size}>
			<img src={product?.typeSize === 'volume' ? volume : weight} alt='' />
			<p>
				{product?.size} {product?.typeSize === 'volume' ? 'мл' : 'г'}
			</p>
		</div>
	)
}

export default ProductSize
