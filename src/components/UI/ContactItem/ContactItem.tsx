import { FC } from 'react'
import styles from './ContactItem.module.scss'

interface InfoItemProps {
	img?: string
	textMain: string
	textSub: string
}

const ContactItem: FC<InfoItemProps> = ({ img, textMain, textSub }) => {
	return (
		<div className={styles.contact__item}>
			{img && (
				<div className={styles.item__img}>
					<img src={img} alt='' />
				</div>
			)}
			<div className={styles.item__text}>
				<p className={styles.text_main}>{textMain}</p>
				<p className={styles.text_sub}>{textSub}</p>
			</div>
		</div>
	)
}

export default ContactItem
