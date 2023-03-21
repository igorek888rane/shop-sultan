import { FC, PropsWithChildren } from 'react'
import styles from './Button.module.scss'

interface ButtonProps {
	style?: object
}

const Button: FC<PropsWithChildren<ButtonProps>> = ({ style, children }) => {
	return (
		<button style={style} className={styles.btn}>
			<div className={styles.btn__children}>{children}</div>
		</button>
	)
}

export default Button
