import { FC } from 'react'
import styles from './Path.module.scss'
import { Link } from 'react-router-dom'

interface PathProps {
	to?: string
	nameLink?: string
	name?: string
}

const Path: FC<PathProps> = ({ to, nameLink, name }) => {
	return (
		<div className={styles.path}>
			<p>Главная</p>
			{to && <Link to={to}>{nameLink}</Link>}
			<p className={styles.path__here}>{name}</p>
		</div>
	)
}

export default Path
