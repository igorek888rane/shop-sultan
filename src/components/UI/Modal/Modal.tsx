import { FC } from 'react'
import styles from './Modal.module.scss'
import close from '../../../img/modal/closeModal.png'
import { useAppDispatch, useAppSelector } from '../../../hooks/useApp'
import { setModal } from '../../../store/slice/modalSlice'

const Modal: FC = () => {
	const { active, body } = useAppSelector(state => state.modal)
	const dispatch = useAppDispatch()
	return (
		<div className={active ? `${styles.modal} ${styles.active}` : styles.modal}>
			<div
				className={
					active
						? `${styles.modal__content} ${styles.active}`
						: styles.modal__content
				}
				onClick={event => event.stopPropagation()}
			>
				<div className={styles.close} onClick={() => dispatch(setModal(null))}>
					<img src={close} alt='' />
				</div>
				{body}
			</div>
		</div>
	)
}

export default Modal
