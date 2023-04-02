import { FC, useEffect, useState } from 'react'
import styles from './AdminPanel.module.scss'
import { IProduct } from '../../data/dataTypes'
import Button from '../UI/Button/Button'
import remove from '../../img/cart/remove.png'
import editIcon from '../../img/admin/edit.png'
import AdminPanelForm from './AdminPanelForm'
import ProductCard from '../Catalog/ProductCard'
import { useAppDispatch } from '../../hooks/useApp'
import { deleteItem } from '../../store/slice/adminSlice'

interface AdminItemCardProps {
	item: IProduct
}

const AdminItemCard: FC<AdminItemCardProps> = ({ item }) => {
	const dispatch = useAppDispatch()
	const [edit, setEdit] = useState(false)
	useEffect(() => {
		setEdit(false)
	}, [item])

	return (
		<div className={styles.admin__item}>
			{!edit && (
				<div className={styles.item__btn}>
					<Button onClick={() => dispatch(deleteItem(item.barcode))}>
						<img src={remove} alt='' />
					</Button>
					<Button
						onClick={() => {
							setEdit(!edit)
						}}
					>
						<img src={editIcon} alt='' />
					</Button>
				</div>
			)}
			{edit ? (
				<AdminPanelForm
					valuesItem={{
						imgSmall: item.imageUrl.small,
						imgLarge: item.imageUrl.large,
						name: item.name,
						size: item.size,
						manufacturer: item.manufacturer,
						brand: item.brand,
						description: item.description,
						price: String(item.price),
					}}
					typeSizeItem={item.typeSize}
					typesCareActiveItem={item.typeCare}
					barcode={item.barcode}
				/>
			) : (
				<ProductCard product={item} adminPanel={true} />
			)}
		</div>
	)
}

export default AdminItemCard
