import { FC } from 'react'
import styles from './Cart.module.scss'
import { useAppDispatch, useAppSelector } from '../../hooks/useApp'
import CartItem from './CartItem'
import Button from '../UI/Button/Button'
import { calcValue } from '../../utils/calcValue'
import { clearCart } from '../../store/slice/cartSlice'
import { setModal } from '../../store/slice/modalSlice'
import ModalContent from '../ModalContent/ModalContent'

const Cart: FC = () => {
	const { cart } = useAppSelector(state => state.cart)
	const dispatch = useAppDispatch()
	const handleSubmit = () => {
		dispatch(clearCart())
		dispatch(setModal(<ModalContent />))
	}
	return (
		<div className={styles.cart}>
			<div className={styles.cart__header}>
				<h1>Корзина</h1>
			</div>
			{cart.length ? (
				cart.map(item => <CartItem key={item.barcode} item={item} />)
			) : (
				<div className={styles.cart__empty}>
					<h2>Корзина пуста</h2>
				</div>
			)}
			{cart.length > 0 && (
				<div className={styles.cart__submit}>
					<Button onClick={handleSubmit}>Оформить заказ</Button>
					<p className={styles.bold}>
						{calcValue(cart).totalPrice.toFixed(2)} ₽
					</p>
				</div>
			)}
		</div>
	)
}

export default Cart
