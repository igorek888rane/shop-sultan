import { FC, PropsWithChildren } from 'react'
import styles from './ChangeCartItem.module.scss'
import { IProduct } from '../../../data/dataTypes'
import { useAppDispatch, useAppSelector } from '../../../hooks/useApp'
import { changeCart } from '../../../store/slice/cartSlice'

interface ChangeCartItemProps {
	product: IProduct | null
}

const ChangeCartItem: FC<PropsWithChildren<ChangeCartItemProps>> = ({
	product,
}) => {
	const dispatch = useAppDispatch()
	const { cart } = useAppSelector(state => state.cart)
	const cartProduct = cart.find(el => el.barcode === product?.barcode)
	return (
		<div className={styles.change__cart}>
			<button
				disabled={!cartProduct}
				onClick={() => product && dispatch(changeCart({ product, amount: -1 }))}
				className={styles.change__btn}
			>
				-
			</button>
			<div className={styles.count}>{cartProduct ? cartProduct.amount : 0}</div>
			<button
				onClick={() => product && dispatch(changeCart({ product, amount: 1 }))}
				className={styles.change__btn}
			>
				+
			</button>
		</div>
	)
}

export default ChangeCartItem
