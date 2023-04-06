import { ChangeEvent, FC, useEffect, useState } from 'react'
import styles from './CheckBox.module.scss'
import { IProduct } from '../../../data/dataTypes'
import { filterType, setFilter } from '../../../store/slice/filterSlice'
import { useAppDispatch, useAppSelector } from '../../../hooks/useApp'

interface InputProps {
	filter: filterType
	head: string
	products?: IProduct[]
}

const CheckBox: FC<InputProps> = ({ filter, head, products }) => {
	let count = products?.filter(el => el[head as keyof IProduct] === filter.name)
	const [checkBox, setCheckBox] = useState<boolean>(false)
	const dispatch = useAppDispatch()
	const { clear } = useAppSelector(state => state.filter)
	useEffect(() => {
		if (!filter.active) {
			setCheckBox(false)
		}
	}, [clear])

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setCheckBox(e.target.checked)
		dispatch(
			setFilter({ filter: filter.name, active: e.target.checked, name: head })
		)
	}
	return (
		<div className={styles.checkbox__block}>
			<input
				id='checkbox'
				className={styles.input}
				type={'checkbox'}
				checked={checkBox}
				onChange={handleChange}
			/>
			<label htmlFor={filter.name} className={styles.name}>
				{filter.name}
				<span>({count?.length})</span>
			</label>
		</div>
	)
}

export default CheckBox
