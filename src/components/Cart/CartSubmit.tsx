import { FC } from 'react'
import styles from './Cart.module.scss'
import { useAppDispatch, useAppSelector } from '../../hooks/useApp'
import { clearCart } from '../../store/slice/cartSlice'
import { setModal } from '../../store/slice/modalSlice'
import ModalContent from '../ModalContent/ModalContent'
import Button from '../UI/Button/Button'
import { calcValue } from '../../utils/calcValue'

const CartSubmit: FC = () => {
	const { cart } = useAppSelector(state => state.cart)

	const dispatch = useAppDispatch()
	const handleSubmit = () => {
		dispatch(clearCart())
		dispatch(setModal(<ModalContent />))
	}
	return (
		<div className={styles.cart__submit}>
			<Button onClick={handleSubmit}>Оформить заказ</Button>
			<p className={styles.bold}>{calcValue(cart).totalPrice.toFixed(2)} ₽</p>
		</div>
	)
}

export default CartSubmit
