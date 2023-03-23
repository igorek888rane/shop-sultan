import { ChangeEvent, FC } from 'react'
import styles from './Select.module.scss'

interface FiltersProps {
	item: { id: string; name: string }[]
	value: string
	onChange: (e: ChangeEvent<HTMLSelectElement>) => void
}

const Select: FC<FiltersProps> = ({ item, value, onChange }) => {
	return (
		<select value={value} onChange={onChange} className={styles.select}>
			{item.map(item => (
				<option key={item.id} value={item.id}>
					{item.name}
				</option>
			))}
		</select>
	)
}

export default Select
