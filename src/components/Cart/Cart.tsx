import { FC } from 'react'
import styles from './Cart.module.scss'
import { useAppSelector } from '../../hooks/useApp'
import CartEmpty from './CartEmpty'
import CartSubmit from './CartSubmit'
import CartHeader from './CartHeader'
import CartItem from './CartItem'

const Cart: FC = () => {
	const { cart } = useAppSelector(state => state.cart)
	return (
		<div className={styles.cart}>
			<CartHeader />
			{cart.length ? (
				<>
					{cart.map(item => (
						<CartItem key={item.barcode} item={item} />
					))}
					<CartSubmit />
				</>
			) : (
				<CartEmpty />
			)}
		</div>
	)
}

export default Cart
