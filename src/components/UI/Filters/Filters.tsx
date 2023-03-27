import { FC } from 'react'
import styles from './Filters.module.scss'
import { useAppDispatch } from '../../../hooks/useApp'
import { itemType, setTypeCare } from '../../../store/slice/filterSlice'

interface FiltersProps {
	items: itemType[]
	direction?: boolean
}

const Filters: FC<FiltersProps> = ({ items, direction }) => {
	const dispatch = useAppDispatch()

	return (
		<div
			className={`${styles.filters} ${direction ? `${styles.column}` : ''} `}
		>
			{items.map(item => (
				<div
					onClick={() => dispatch(setTypeCare(item.name))}
					key={item.name}
					className={`${styles.filters__item} ${
						item.active ? `${styles.active}` : ''
					} `}
				>
					<p className={styles.filters__text}>{item.name}</p>
				</div>
			))}
		</div>
	)
}

export default Filters
