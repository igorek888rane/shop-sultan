import { FC } from 'react'
import styles from './Filters.module.scss'

interface FiltersProps {
	item: { id: string; name: string }[]
	direction?: boolean
}

const Filters: FC<FiltersProps> = ({ item, direction }) => {
	return (
		<div
			style={{ flexDirection: direction ? 'column' : 'row' }}
			className={styles.filters}
		>
			{item.map(item => (
				<div key={item.id} className={`${styles.filters__item} `}>
					<p className={styles.filters__text}>{item.name}</p>
				</div>
			))}
		</div>
	)
}

export default Filters
