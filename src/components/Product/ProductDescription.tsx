import { FC, useState } from 'react'
import styles from './Product.module.scss'
import arrow from '../../img/catalog/arrowFilter.png'
import { useAppSelector } from '../../hooks/useApp'

const ProductDescription: FC = () => {
	const [show, setShow] = useState(false)
	const { product } = useAppSelector(state => state.products)

	return (
		<div className={styles.product__description}>
			<div className={styles.product__show} onClick={() => setShow(!show)}>
				<p>Описание</p>
				<div className={show ? styles.show : ''}>
					<img src={arrow} alt='' />
				</div>
			</div>
			<p
				style={{ display: show ? 'block' : 'none' }}
				className={styles.description}
			>
				{product?.description}
			</p>
		</div>
	)
}

export default ProductDescription
