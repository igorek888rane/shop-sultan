import { FC } from 'react'
import styles from './CartPage.module.scss'
import { useAppSelector } from '../../hooks/useApp'

const CartPage: FC = () => {
	const { cart } = useAppSelector(state => state.cart)
	return (
		<main className={styles.cart}>
			{cart.map(el => (
				<div>{el.name}</div>
			))}
		</main>
	)
}

export default CartPage
