import { FC, ReactElement } from 'react'
import styles from './Footer.module.scss'

interface FooterItemProps {
	header: string
	item: ReactElement[]
	className?: string
}

const FooterItem: FC<FooterItemProps> = ({ header, item, className }) => {
	return (
		<div className={`${styles.footer__item} ${className}`}>
			<h2>{header}</h2>
			<div className={styles.footer__element}>{item.map(item => item)}</div>
		</div>
	)
}

export default FooterItem
