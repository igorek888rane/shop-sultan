import { FC, useState } from 'react'
import styles from './AdminPanel.module.scss'
import { IProduct } from '../../data/dataTypes'

interface AdminItemCardProps {
	item: IProduct
}

const AdminItemCard: FC<AdminItemCardProps> = ({ item }) => {
	const [edit, setEdit] = useState(false)
	return (
		<div className={styles.admin__item}>
			<img src={item.imageUrl.small} alt='' />
		</div>
	)
}

export default AdminItemCard
