import React from 'react'
import styles from './Product.module.scss'
import share from '../../img/product/share.png'
import download from '../../img/product/download.png'

const ProductItems = () => {
	return (
		<div className={styles.product__items}>
			<div className={`${styles.product__item} ${styles.up}`}>
				<img src={share} alt='' />
			</div>
			<div className={styles.product__item}>
				<p>
					При покупке от <span className={styles.bold}>10 000 ₽</span>{' '}
					бесплатная доставка по Кокчетаву и области
				</p>
			</div>
			<div className={styles.product__item}>
				<p className={styles.bold}>Прайс лист</p>
				<img src={download} alt='' />
			</div>
		</div>
	)
}

export default ProductItems
