import { FC } from 'react'
import styles from './Product.module.scss'
import { useAppSelector } from '../../hooks/useApp'

const ProductDescription: FC = () => {
	const { product } = useAppSelector(state => state.products)

	return (
		<div className={styles.product__characteristic}>
			<p className={styles.product__text}>
				Производитель:{' '}
				<span className={styles.info}>{product?.manufacturer}</span>
			</p>
			<p className={styles.product__text}>
				Бренд: <span className={styles.info}>{product?.brand}</span>
			</p>
			<p className={styles.product__text}>
				Артикул: <span className={styles.info}>460404</span>
			</p>
			<p className={styles.product__text}>
				Кол-во в коробке: <span className={styles.info}>2</span>
			</p>
			<p className={styles.product__text}>
				Штрихкод: <span className={styles.info}>{product?.barcode}</span>
			</p>
			<p className={styles.product__text}>
				Размеры коробки(Д*Ш*В): <span className={styles.info}>10х10х10</span>
			</p>
			<p className={styles.product__text}>
				{product?.typeSize === 'weight' ? 'Вес коробки:' : 'Объем:'}{' '}
				<span className={styles.info}>{product?.size}</span>
			</p>
		</div>
	)
}

export default ProductDescription
