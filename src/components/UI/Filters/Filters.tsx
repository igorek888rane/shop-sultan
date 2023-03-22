import { FC } from 'react'
import styles from './Filters.module.scss'

interface FiltersProps {
	item: { id: string; name: string }[]
}

const Filters: FC<FiltersProps> = ({ item }) => {
	return (
		<div className={styles.filters}>
			{item.map(item => (
				<div className={`${styles.filters__item} `}>
					<p className={styles.filters__text}>{item.name}</p>
				</div>
			))}
		</div>
	)
}

export default Filters
