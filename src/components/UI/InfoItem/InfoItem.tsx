import { FC } from 'react'
import styles from './InfoItem.module.scss'

interface InfoItemProps {
	number: string
	hour: string
	text: string
	style?: object
}

const InfoItem: FC<InfoItemProps> = ({ number, hour, text, style }) => {
	return (
		<div style={style} className={styles.item__text}>
			<p className={styles.text__number}>{number}</p>
			<p className={styles.text__hours}>{hour}</p>
			<p className={styles.text__call}>{text}</p>
		</div>
	)
}

export default InfoItem
