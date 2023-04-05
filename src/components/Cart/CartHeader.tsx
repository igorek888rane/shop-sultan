import { FC } from 'react'
import styles from './Cart.module.scss'

const CartHeader: FC = () => {
	return (
		<div className={styles.cart__header}>
			<h1>Корзина</h1>
		</div>
	)
}

export default CartHeader
