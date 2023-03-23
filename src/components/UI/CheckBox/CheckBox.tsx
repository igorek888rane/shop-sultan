import { FC } from 'react'
import styles from './CheckBox.module.scss'
import { IProduct } from '../../../data/dataTypes'

interface InputProps {
	name: string
	head: string
	products?: IProduct[]
}

const CheckBox: FC<InputProps> = ({ name, head, products }) => {
	let count = products?.filter(el => el[head as keyof IProduct] === name)
	return (
		<div className={styles.checkbox__block}>
			<input className={styles.input} type={'checkbox'} />
			<label htmlFor={name} className={styles.name}>
				{name}
				<span>({count?.length})</span>
			</label>
		</div>
	)
}

export default CheckBox
