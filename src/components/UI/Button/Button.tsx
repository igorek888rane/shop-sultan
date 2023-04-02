import { FC, PropsWithChildren } from 'react'
import styles from './Button.module.scss'

interface ButtonProps {
	type?: 'submit'
	style?: object
	onClick?: () => void
}

const Button: FC<PropsWithChildren<ButtonProps>> = ({
	type,
	style,
	onClick,
	children,
}) => {
	return (
		<button
			type={type ? type : 'button'}
			style={style}
			className={styles.btn}
			onClick={onClick}
		>
			<div className={styles.btn__children}>{children}</div>
		</button>
	)
}

export default Button
