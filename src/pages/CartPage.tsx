import { FC } from 'react'
import Cart from '../components/Cart/Cart'
import Path from '../components/Path/Path'

const CartPage: FC = () => {
	return (
		<main data-testid='cart-page'>
			<div className={'content'}>
				<Path to={'/'} nameLink={'Каталог'} name={'Корзина'} />
				<Cart />
			</div>
		</main>
	)
}

export default CartPage
