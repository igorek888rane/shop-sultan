import { FC, PropsWithChildren } from 'react'
import styles from './Button.module.scss'

interface ButtonProps {
	style?: object
	onClick?: () => void
}

const Button: FC<PropsWithChildren<ButtonProps>> = ({
	style,
	onClick,
	children,
}) => {
	return (
		<button style={style} className={styles.btn} onClick={onClick}>
			<div className={styles.btn__children}>{children}</div>
		</button>
	)
}

export default Button
