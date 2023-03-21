import { FC } from 'react'
import styles from './Input.module.scss'
import search from '../../../img/input/search.png'
import Button from '../Button/Button'

interface InputProps {
	type: string
	placeholder: string
}

const Input: FC<InputProps> = ({ type, placeholder }) => {
	return (
		<div className={styles.input__block}>
			<input className={styles.input} type={type} placeholder={placeholder} />
			<div className={styles.btn}>
				<Button style={{ padding: '13px' }}>
					<img src={search} alt='' />
				</Button>
			</div>
		</div>
	)
}

export default Input
