import { FC } from 'react'
import styles from './Header.module.scss'
import logo from '../../img/header/Logo.png'
import catalog from '../../img/header/catalog.png'
import download from '../../img/header/download.png'
import support from '../../img/header/support.png'
import cart from '../../img/header/cart_icon.png'
import Button from '../UI/Button/Button'
import Input from '../UI/Input/Input'

const HeaderDown: FC = () => {
	return (
		<div className={`${styles.header__down} content`}>
			<div className={styles.item}>
				<img src={logo} alt='' />
			</div>
			<div className={styles.item}>
				<Button>
					<p>Каталог</p>
					<img src={catalog} alt='' />
				</Button>
				<Input type={'text'} placeholder={'Поиск...'} />
			</div>
			<div className={styles.item}>
				<div className={styles.item__text}>
					<p className={styles.text__number}>+7 (777) 490-00-91</p>
					<p className={styles.text__hours}>время работы: 9:00-20:00</p>
					<p className={styles.text__call}>Заказать звонок</p>
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
			<div className={styles.item}>
				<div className={styles.item__img}>
					<img src={cart} alt='' />
				</div>
				<div className={styles.item__text}>
					<p className={styles.text__hours}>Корзина</p>
					<p className={styles.text__number}>12 478 ₸ </p>
				</div>
			</div>
		</div>
	)
}

export default HeaderDown
