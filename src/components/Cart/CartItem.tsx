import { FC } from 'react'
import styles from './Cart.module.scss'
import { ICart, removeItem } from '../../store/slice/cartSlice'
import volume from '../../img/catalog/volume.png'
import weight from '../../img/catalog/weight.png'
import { Link } from 'react-router-dom'
import ChangeCartItem from '../UI/ChangeCartItem/ChangeCartItem'
import Button from '../UI/Button/Button'
import remove from '../../img/cart/remove.png'
import { useAppDispatch } from '../../hooks/useApp'

interface CartItemProps {
	item: ICart
}

const CartItem: FC<CartItemProps> = ({ item }) => {
	const dispatch = useAppDispatch()
	return (
		<div className={styles.cart__item}>
			<div className={styles.cart__product}>
				<Link to={`/${item.barcode}`} className={styles.product__img}>
					<img src={item.imageUrl.small} alt='' />
				</Link>
				<div className={styles.product__info}>
					<div className={styles.product__size}>
						<img src={item.typeSize === 'volume' ? volume : weight} alt='' />
						<p>{item.size}</p>
					</div>
					<div className={`${styles.bold} ${styles.product__name}`}>
						{item.name}
					</div>
					<div className={styles.product__description}>{item.description}</div>
				</div>
			</div>
			<div className={styles.product__price}>
				<ChangeCartItem product={item} />
				<p className={`${styles.bold} ${styles.price}`}>
					{(item.price * item.amount).toFixed(2)} ₽
				</p>
				<Button
					onClick={() => {
						dispatch(removeItem(item.barcode))
					}}
					style={{ padding: '21px' }}
				>
					<img src={remove} alt='' />
				</Button>
			</div>
		</div>
	)
}

export default CartItem
