import React, { FC } from 'react'
import styles from './ModalContent.module.scss'
import success from '../../img/modal/success.png'

const ModalContent: FC = () => {
	return (
		<div className={styles.modal__content}>
			<img src={success} alt='' />
			<p className={styles.main__text}>Спасибо за заказ</p>
			<p className={styles.sub__text}>
				Наш менеджер свяжется с вами в ближайшее время
			</p>
		</div>
	)
}

export default ModalContent
