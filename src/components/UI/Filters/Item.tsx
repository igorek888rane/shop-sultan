import { FC } from 'react'
import { itemType, setTypeCare } from '../../../store/slice/filterSlice'
import styles from './Filters.module.scss'
import { useAppDispatch } from '../../../hooks/useApp'

interface ItemProps {
	item: itemType
}

const Item: FC<ItemProps> = ({ item }) => {
	const dispatch = useAppDispatch()

	return (
		<div
			id={'typeCare-item'}
			onClick={() => dispatch(setTypeCare(item.name))}
			key={item.name}
			className={`${styles.filters__item} ${
				item.active ? `${styles.active}` : ''
			} `}
		>
			<p className={styles.filters__text}>{item.name}</p>
		</div>
	)
}

export default Item
