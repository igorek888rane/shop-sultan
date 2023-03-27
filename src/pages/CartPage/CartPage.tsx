import { FC } from 'react'
import styles from './CartPage.module.scss'
import { Link } from 'react-router-dom'
import Cart from '../../components/Cart/Cart'

const CartPage: FC = () => {
	return (
		<main className={styles.cart__page}>
			<div className={'content'}>
				<div className={'path'}>
					<p>Главная</p>
					<Link to={'/'}>Каталог</Link>
					<p className={'path__here'}>Корзина</p>
				</div>
				<Cart />
			</div>
		</main>
	)
}

export default CartPage
