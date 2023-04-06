import { FC, PropsWithChildren } from 'react'
import styles from './Button.module.scss'

interface ButtonProps {
	type?: 'submit'
	style?: object
	id?: string
	disabled?: boolean
	onClick?: () => void
}

const Button: FC<PropsWithChildren<ButtonProps>> = ({
	type,
	style,
	id,
	disabled,
	onClick,
	children,
}) => {
	return (
		<button
			id={id}
			type={type ? type : 'button'}
			style={style}
			disabled={disabled}
			className={styles.btn}
			onClick={onClick}
		>
			<div className={styles.btn__children}>{children}</div>
		</button>
	)
}

export default Button
