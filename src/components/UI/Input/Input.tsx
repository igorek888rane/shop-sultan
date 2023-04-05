import { ChangeEvent, FocusEvent, FC } from 'react'
import styles from './Input.module.scss'

interface InputProps {
	id?: string
	type: string
	placeholder: string
	value: string
	onChange: (e: ChangeEvent<HTMLInputElement>) => void
	onBlur?: (e: FocusEvent<HTMLInputElement>) => void
}

const Input: FC<InputProps> = ({
	id,
	type,
	placeholder,
	value,
	onChange,
	onBlur,
}) => {
	return (
		<input
			id={id}
			className={styles.input}
			type={type}
			placeholder={placeholder}
			value={value}
			onChange={onChange}
			onBlur={onBlur}
		/>
	)
}

export default Input
