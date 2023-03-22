import { FC } from 'react'
import styles from './Input.module.scss'
import Button from '../Button/Button'

interface InputProps {
	type: string
	placeholder: string
	img: string
}

const Input: FC<InputProps> = ({ type, placeholder, img }) => {
	return (
		<div className={styles.input__block}>
			<input className={styles.input} type={type} placeholder={placeholder} />
			<div className={styles.btn}>
				<Button style={{ padding: '13px' }}>
					<img src={img} alt='' />
				</Button>
			</div>
		</div>
	)
}

export default Input
