import { FC, useState } from 'react'
import styles from './AdminPanel.module.scss'
import AdminPanelForm from './AdminPanelForm'
import { useAppDispatch, useAppSelector } from '../../hooks/useApp'
import AdminItemCard from './AdminItemCard'
import Button from '../UI/Button/Button'
import { clearItems, setItems } from '../../store/slice/adminSlice'
import data from '../../data/data.json'

const AdminPanel: FC = () => {
	const { items } = useAppSelector(state => state.admin)
	const dispatch = useAppDispatch()

	const [hidden, setHidden] = useState(true)
	return (
		<div className={styles.admin}>
			<h1 data-testid={'admin-header'}>Админка</h1>
			<div className={styles.admin__btn}>
				<Button onClick={() => dispatch(clearItems())}>
					Очистить localStorage
				</Button>
				<Button onClick={() => dispatch(setItems(data))}>
					Заполнить из JSON
				</Button>
				<Button onClick={() => setHidden(!hidden)}>
					{hidden ? 'Показать форму' : 'Скрыть форму'}
				</Button>
			</div>
			{!hidden && (
				<AdminPanelForm
					valuesItem={{
						imgSmall: '',
						imgLarge: '',
						name: '',
						size: '',
						manufacturer: '',
						brand: '',
						description: '',
						price: '',
					}}
					typeSizeItem={'volume'}
					typesCareActiveItem={[]}
				/>
			)}
			<div className={styles.admin__items}>
				{items.map(item => (
					<AdminItemCard key={item.barcode} item={item} />
				))}
			</div>
		</div>
	)
}

export default AdminPanel
