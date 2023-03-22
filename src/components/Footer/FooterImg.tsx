import { FC } from 'react'
import styles from './Footer.module.scss'

interface FooterItemProps {
	img1: string
	img2: string
}

const FooterImg: FC<FooterItemProps> = ({ img1, img2 }) => {
	return (
		<div className={styles.footer__img}>
			<img src={img1} alt='' />
			<img src={img2} alt='' />
		</div>
	)
}

export default FooterImg
