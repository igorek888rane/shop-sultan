import { FC } from 'react'
import styles from './Header.module.scss'
import ContactItem from '../UI/ContactItem/ContactItem'
import geo from '../../img/header/geo.png'
import mail from '../../img/header/mail_icon.png'

const HeaderUp: FC = () => {
	return (
		<div className={`${styles.header__up} content`}>
			<div className={styles.header__info}>
				<ContactItem
					img={geo}
					textMain={'г. Кокчетав, ул. Ж. Ташенова 129Б'}
					textSub={'(Рынок Восточный)'}
				/>
				<ContactItem
					img={mail}
					textMain={'opt.sultan@mail.ru'}
					textSub={'На связи в любое время'}
				/>
			</div>
			<nav className={styles.header__nav}>
				{['О компании', 'Доставка и оплата', 'Возврат', 'Контакты'].map(a => (
					<a key={a} className={styles.nav__item} href='#'>
						{a}
					</a>
				))}
			</nav>
		</div>
	)
}

export default HeaderUp
