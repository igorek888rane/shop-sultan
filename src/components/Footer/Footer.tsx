import { FC } from 'react'
import styles from './Footer.module.scss'
import logo from '../../img/footer/logo.png'
import arrow from '../../img/footer/arrow.png'
import InputSearch from '../UI/InputSearch/InputSearch'
import FooterItem from './FooterItem'
import download from '../../img/header/download.png'
import whatsup from '../../img/footer/whatsup.png'
import telegram from '../../img/footer/telegram.png'
import visa from '../../img/footer/visa.png'
import mastercard from '../../img/footer/mastercard.png'

import Button from '../UI/Button/Button'
import ContactItem from '../ContactItem/ContactItem'
import InfoItem from '../InfoItem/InfoItem'
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
						<InputSearch
							type={'text'}
							placeholder={'Введите ваш E-mail'}
							img={arrow}
						/>
					</div>
				</div>
				<FooterItem
					header={'Меню сайта:'}
					item={[
						<a key={'О компании'}>О компании</a>,
						<a key={'Доставка и оплата'}>Доставка и оплата</a>,
						<a key={'Возврат'}>Возврат</a>,
						<a key={'Контакты'}>Контакты</a>,
					]}
				/>
				<FooterItem
					header={'Категории:'}
					item={[
						<a key={'Бытовая химия'}>Бытовая химия</a>,
						<a key={'Косметика и гигиена'}>Косметика и гигиена</a>,
						<a key={'Товары для дома'}>Товары для дома</a>,
						<a key={'Товары для детей и мам'}>Товары для детей и мам</a>,
						<a key={'Посуда'}>Посуда</a>,
					]}
				/>
				<FooterItem
					className={styles.footer__price}
					header={'Скачать прайс-лист:'}
					item={[
						<Button key={'button'}>
							<p>Прайс-лист</p>
							<img src={download} alt='' />
						</Button>,
						<div className={styles.footer__info} key={'info'}>
							<p className={styles.footer__text}>Связь в мессенджерах:</p>
							<FooterImg img1={whatsup} img2={telegram} />
						</div>,
					]}
				/>
				<FooterItem
					header={'Контакты:'}
					item={[
						<InfoItem
							key={'number'}
							number={'+7 (777) 490-00-91'}
							hour={'время работы: 9:00-20:00'}
							text={'Заказать звонок'}
						/>,
						<ContactItem
							key={'contact'}
							textMain={'opt.sultan@mail.ru'}
							textSub={'На связи в любое время'}
						/>,
						<FooterImg img1={visa} img2={mastercard} key={'img'} />,
					]}
				/>
			</div>
		</footer>
	)
}

export default Footer
