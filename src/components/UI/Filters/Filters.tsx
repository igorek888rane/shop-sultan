import { FC } from 'react'
import styles from './Filters.module.scss'
import { itemType } from '../../../store/slice/filterSlice'
import Item from './Item'

interface FiltersProps {
	items: itemType[]
	direction?: boolean
}

const Filters: FC<FiltersProps> = ({ items, direction }) => {
	return (
		<div
			className={`${styles.filters} ${direction ? `${styles.column}` : ''} `}
		>
			{items.map(item => (
				<Item key={item.name} item={item} />
			))}
		</div>
	)
}

export default Filters
