import React, { FC } from 'react'
import styles from './Product.module.scss'
import ChangeCartItem from '../UI/ChangeCartItem/ChangeCartItem'
import Button from '../UI/Button/Button'
import { changeCart } from '../../store/slice/cartSlice'
import cartIcon from '../../img/catalog/cart.png'
import share from '../../img/product/share.png'
import { useAppDispatch, useAppSelector } from '../../hooks/useApp'

const ProductPrice: FC = () => {
	const { product } = useAppSelector(state => state.products)
	const { cart } = useAppSelector(state => state.cart)
	const cartProduct = cart.find(item => item.barcode === product?.barcode)
	const dispatch = useAppDispatch()
	return (
		<div className={styles.product__price}>
			<p className={styles.product__name}>
				{cartProduct
					? (cartProduct.amount * cartProduct.price).toFixed(1)
					: product?.price}
				₽
			</p>
			<ChangeCartItem product={product} />
			<Button
				onClick={() => product && dispatch(changeCart({ product, amount: 1 }))}
				style={{ padding: '21px 25px ' }}
			>
				<p>В КОРЗИНУ</p>
				<img src={cartIcon} alt='' />
			</Button>
			<div className={`${styles.product__item} ${styles.up}`}>
				<img src={share} alt='' />
			</div>
		</div>
	)
}

export default ProductPrice
