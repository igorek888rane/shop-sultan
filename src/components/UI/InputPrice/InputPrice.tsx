import { ChangeEvent, FC } from 'react'
import styles from './InputPrice.module.scss'

interface InputProps {
	type: string
	placeholder: string
	value: string
	onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const InputPrice: FC<InputProps> = ({ type, placeholder, value, onChange }) => {
	return (
		<input
			className={styles.input}
			type={type}
			placeholder={placeholder}
			value={value}
			onChange={onChange}
		/>
	)
}

export default InputPrice
