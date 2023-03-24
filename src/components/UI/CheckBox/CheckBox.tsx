import { ChangeEvent, FC, useState } from 'react'
import styles from './CheckBox.module.scss'
import { IProduct } from '../../../data/dataTypes'

interface InputProps {
	name: string
	head: string
	products?: IProduct[]
}

const CheckBox: FC<InputProps> = ({ name, head, products }) => {
	let count = products?.filter(el => el[head as keyof IProduct] === name)
	const [checkBox, setCheckBox] = useState<boolean>(false)

	return (
		<div className={styles.checkbox__block}>
			<input
				className={styles.input}
				type={'checkbox'}
				checked={checkBox}
				onChange={(e: ChangeEvent<HTMLInputElement>) =>
					setCheckBox(e.target.checked)
				}
			/>
			<label htmlFor={name} className={styles.name}>
				{name}
				<span>({count?.length})</span>
			</label>
		</div>
	)
}

export default CheckBox
