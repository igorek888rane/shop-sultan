import { FC } from 'react'
import styles from './Header.module.scss'
import catalog from '../../img/header/catalog-icon-mobile.png'
import search from '../../img/header/search-icon-mobile.png'
import { Link } from 'react-router-dom'

const HeaderDownMobile: FC = () => {
	return (
		<div className={`${styles.header__down_mobile} content`}>
			<Link to={'/'} className={styles.item}>
				<img src={catalog} alt='' />
				<p>Каталог</p>
			</Link>
			<div className={styles.border}></div>
			<div className={styles.item}>
				<img src={search} alt='' />
				<p>Поиск</p>
			</div>
		</div>
	)
}

export default HeaderDownMobile
