import { ChangeEvent, FC } from 'react'
import styles from './InputPrice.module.scss'

interface InputProps {
	id?: string
	type: string
	placeholder: string
	value: string
	onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const InputPrice: FC<InputProps> = ({
	id,
	type,
	placeholder,
	value,
	onChange,
}) => {
	return (
		<input
			id={id}
			className={styles.input}
			type={type}
			placeholder={placeholder}
			value={value}
			onChange={onChange}
		/>
	)
}

export default InputPrice
