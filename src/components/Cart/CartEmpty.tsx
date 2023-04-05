import { FC } from 'react'
import styles from './Cart.module.scss'

const CartEmpty: FC = () => {
	return (
		<div className={styles.cart__empty}>
			<h2>Корзина пуста</h2>
		</div>
	)
}

export default CartEmpty
