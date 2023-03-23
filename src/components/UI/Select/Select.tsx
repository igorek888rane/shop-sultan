import { FC } from 'react'
import styles from './Select.module.scss'

interface FiltersProps {
	item: { id: string; name: string }[]
}

const Select: FC<FiltersProps> = ({ item }) => {
	return (
		<select defaultValue={item[0].name} className={styles.select}>
			{item.map(item => (
				<option key={item.id}>{item.name}</option>
			))}
		</select>
	)
}

export default Select
