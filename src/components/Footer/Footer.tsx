import { FC } from 'react'
import styles from './Footer.module.scss'
import logo from '../../img/footer/logo.png'
import arrow from '../../img/footer/arrow.png'
import Input from '../UI/Input/Input'
import FooterItem from './FooterItem'
import download from '../../img/header/download.png'
import whatsup from '../../img/footer/whatsup.png'
import telegram from '../../img/footer/telegram.png'
import visa from '../../img/footer/visa.png'
import mastercard from '../../img/footer/mastercard.png'

import Button from '../UI/Button/Button'
import ContactItem from '../UI/ContactItem/ContactItem'
import InfoItem from '../UI/InfoItem/InfoItem'
import FooterImg from './FooterImg'

const Footer: FC = () => {
	return (
		<footer className={styles.footer}>
			<div className={`${styles.footer__content} content`}>
				<div className={`${styles.footer__logo} ${styles.footer__item}`}>
					<img className={styles.logo} src={logo} alt='' />
					<p className={styles.footer__info}>
						Компания «Султан» — снабжаем розничные магазины товарами "под ключ"
						в Кокчетаве и Акмолинской области
					</p>
					<div className={styles.footer__subscribe}>
						<p className={styles.footer__text}>Подпишись на скидки и акции</p>
						<Input
							type={'text'}
							placeholder={'Введите ваш E-mail'}
							img={arrow}
						/>
					</div>
				</div>
				<FooterItem
					header={'Меню сайта:'}
					item={[
						<a>О компании</a>,
						<a>Доставка и оплата</a>,
						<a>Возврат</a>,
						<a>Контакты</a>,
					]}
				/>
				<FooterItem
					header={'Категории:'}
					item={[
						<a>Бытовая химия</a>,
						<a>Косметика и гигиена</a>,
						<a>Товары для дома</a>,
						<a>Товары для детей и мам</a>,
						<a>Посуда</a>,
					]}
				/>
				<FooterItem
					className={styles.footer__price}
					header={'Скачать прайс-лист:'}
					item={[
						<Button>
							<p>Прайс-лист</p>
							<img src={download} alt='' />
						</Button>,
						<div className={styles.footer__info}>
							<p className={styles.footer__text}>Связь в мессенджерах:</p>
							<FooterImg img1={whatsup} img2={telegram} />
						</div>,
					]}
				/>
				<FooterItem
					header={'Контакты:'}
					item={[
						<InfoItem
							number={'+7 (777) 490-00-91'}
							hour={'время работы: 9:00-20:00'}
							text={'Заказать звонок'}
						/>,
						<ContactItem
							textMain={'opt.sultan@mail.ru'}
							textSub={'На связи в любое время'}
						/>,
						<FooterImg img1={visa} img2={mastercard} />,
					]}
				/>
			</div>
		</footer>
	)
}

export default Footer
