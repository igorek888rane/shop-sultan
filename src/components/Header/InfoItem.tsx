import { FC } from 'react'
import styles from './Header.module.scss'

interface InfoItemProps {
	img: string
	textMain: string
	textSub: string
}

const InfoItem: FC<InfoItemProps> = ({ img, textMain, textSub }) => {
	return (
		<div className={styles.info__item}>
			<div className={styles.item__img}>
				<img src={img} alt='' />
			</div>
			<div className={styles.item__text}>
				<p className={styles.text_main}>{textMain}</p>
				<p className={styles.text_sub}>{textSub}</p>
			</div>
		</div>
	)
}

export default InfoItem
