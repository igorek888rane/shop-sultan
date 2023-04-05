import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.scss'
import { calcValue } from '../../utils/calcValue'
import cartIcon from '../../img/header/cart_icon.png'
import { useAppSelector } from '../../hooks/useApp'

const CartIcon = () => {
	const { cart } = useAppSelector(state => state.cart)

	return (
		<Link
			to={'cart'}
			data-testid={'cart-link'}
			className={`${styles.item} ${styles.cart__item}`}
		>
			<div className={styles.item__img}>
				{cart.length > 0 && (
					<div className={styles.cart_count}>{calcValue(cart).totalCount}</div>
				)}
				<img src={cartIcon} alt='' />
			</div>
			<div className={styles.item__text}>
				<p className={styles.text__hours}>Корзина</p>
				<p className={styles.text__number}>
					{cart.length && calcValue(cart).totalPrice.toFixed(2)} ₽
				</p>
			</div>
		</Link>
	)
}

export default CartIcon
