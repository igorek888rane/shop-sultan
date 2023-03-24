import { FC } from 'react'
import styles from './Filters.module.scss'
import { useAppDispatch, useAppSelector } from '../../../hooks/useApp'
import { itemType, setTypeCare } from '../../../store/slice/filterSlice'

interface FiltersProps {
	items: itemType[]
	direction?: boolean
}

const Filters: FC<FiltersProps> = ({ items, direction }) => {
	const { typeCare } = useAppSelector(state => state.filter)
	const dispatch = useAppDispatch()
	const handleClick = (item: itemType) => {
		if (item.id === typeCare) {
			dispatch(setTypeCare(''))
		} else {
			dispatch(setTypeCare(item.id))
		}
	}
	return (
		<div
			className={`${styles.filters} ${direction ? `${styles.column}` : ''} `}
		>
			{items.map(item => (
				<div
					onClick={() => handleClick(item)}
					key={item.id}
					className={`${styles.filters__item} ${
						typeCare === item.id ? `${styles.active}` : ''
					} `}
				>
					<p className={styles.filters__text}>{item.name}</p>
				</div>
			))}
		</div>
	)
}

export default Filters
