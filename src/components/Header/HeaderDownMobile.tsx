import { FC } from 'react'
import styles from './Header.module.scss'
import catalog from '../../img/header/catalog-icon-mobile.png'
import search from '../../img/header/search-icon-mobile.png'

const HeaderDownMobile: FC = () => {
	return (
		<div className={`${styles.header__down_mobile} content`}>
			<div className={styles.item}>
				<img src={catalog} alt='' />
				<p>Каталог</p>
			</div>
			<div className={styles.border}></div>
			<div className={styles.item}>
				<img src={search} alt='' />
				<p>Поиск</p>
			</div>
		</div>
	)
}

export default HeaderDownMobile
