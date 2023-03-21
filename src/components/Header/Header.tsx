import { FC } from 'react'
import styles from './Header.module.scss'
import HeaderUp from './HeaderUp'
import HeaderDown from './HeaderDown'

const Header: FC = () => {
	return (
		<header className={styles.header}>
			<HeaderUp />
			<hr />
			<HeaderDown />
			<hr />
		</header>
	)
}

export default Header
