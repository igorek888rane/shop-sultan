import { FC } from 'react'
import styles from './Header.module.scss'
import logo from '../../img/header/Logo.png'
import catalog from '../../img/header/catalog.png'
import download from '../../img/header/download.png'
import support from '../../img/header/support.png'
import burger from '../../img/header/burger.png'
import search from '../../img/input/search.png'
import Button from '../UI/Button/Button'
import Input from '../UI/Input/Input'
import InfoItem from '../InfoItem/InfoItem'
import { Link } from 'react-router-dom'
import CartIcon from './CartIcon'

const HeaderDown: FC = () => {
	return (
		<div className={`${styles.header__down} content`}>
			<div className={styles.burger}>
				<img src={burger} alt='' />
				<Link to={'admin'}>Админка</Link>
			</div>
			<div className={`${styles.item} ${styles.logo__item}`}>
				<img src={logo} alt='' />
			</div>
			<div className={`${styles.item} `}>
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
			<CartIcon />
		</div>
	)
}

export default HeaderDown
