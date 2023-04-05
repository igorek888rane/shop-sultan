import { ChangeEvent, FC } from 'react'
import styles from './InputSearch.module.scss'

import Button from '../Button/Button'

interface InputProps {
	type: string
	placeholder: string
	img: string
	value?: string
	onChange?: (value: string) => void
}

const InputSearch: FC<InputProps> = ({
	type,
	placeholder,
	img,
	value,
	onChange,
}) => {
	return (
		<div className={styles.input__block}>
			<input
				className={styles.input}
				type={type}
				placeholder={placeholder}
				value={value}
				onChange={(e: ChangeEvent<HTMLInputElement>) =>
					onChange && onChange(e.target.value)
				}
			/>
			<div className={styles.btn}>
				<Button style={{ padding: '13px' }}>
					<img src={img} alt='' />
				</Button>
			</div>
		</div>
	)
}

export default InputSearch
