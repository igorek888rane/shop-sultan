import { FC } from 'react'
import styles from './Cart.module.scss'
import { useAppSelector } from '../../hooks/useApp'
import CartItem from './CartItem'

const Cart: FC = () => {
	const { cart } = useAppSelector(state => state.cart)

	return (
		<div className={styles.cart}>
			<div className={styles.cart__header}>
				<h1>Корзина</h1>
			</div>
			{cart.length ? (
				cart.map(item => <CartItem item={item} />)
			) : (
				<div className={styles.cart__empty}>
					<h2>Корзина пуста</h2>
				</div>
			)}
		</div>
	)
}

export default Cart
