import { FC } from 'react'
import styles from './Header.module.scss'
import logo from '../../img/header/Logo.png'
import catalog from '../../img/header/catalog.png'
import download from '../../img/header/download.png'
import support from '../../img/header/support.png'
import cartIcon from '../../img/header/cart_icon.png'
import search from '../../img/input/search.png'
import Button from '../UI/Button/Button'
import Input from '../UI/Input/Input'
import InfoItem from '../UI/InfoItem/InfoItem'
import { useAppSelector } from '../../hooks/useApp'
import { Link } from 'react-router-dom'

const HeaderDown: FC = () => {
	const { cart } = useAppSelector(state => state.cart)
	return (
		<div className={`${styles.header__down} content`}>
			<div className={styles.item}>
				<img src={logo} alt='' />
			</div>
			<div className={styles.item}>
				<Link to={'/'}>
					<Button>
						<p>Каталог</p>
						<img src={catalog} alt='' />
					</Button>
				</Link>
				<Input type={'text'} placeholder={'Поиск...'} img={search} />
			</div>
			<div className={styles.item}>
				<div className={styles.item__text}>
					<InfoItem
						number={'+7 (777) 490-00-91'}
						hour={'время работы: 9:00-20:00'}
						text={'Заказать звонок'}
						style={{ textAlign: 'end' }}
					/>
				</div>
				<div className={styles.item__img}>
					<img src={support} alt='' />
				</div>
			</div>
			<div className={styles.item}>
				<Button>
					<p>Прайс-лист</p>
					<img src={download} alt='' />
				</Button>
			</div>
			<Link to={'cart'} className={`${styles.item} ${styles.cart__item}`}>
				<div className={styles.item__img}>
					<div className={styles.cart_count}>{cart.length}</div>

					<img src={cartIcon} alt='' />
				</div>
				<div className={styles.item__text}>
					<p className={styles.text__hours}>Корзина</p>
					<p className={styles.text__number}>0 ₽</p>
				</div>
			</Link>
		</div>
	)
}

export default HeaderDown
