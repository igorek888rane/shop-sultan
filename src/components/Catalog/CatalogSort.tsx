import { ChangeEvent, FC } from 'react'
import styles from './Catalog.module.scss'
import Select from '../UI/Select/Select'
import { setSortBy, setSortName } from '../../store/slice/sortSlice'
import { useAppDispatch, useAppSelector } from '../../hooks/useApp'

interface CatalogFiltersProps {}

const CatalogSort: FC<CatalogFiltersProps> = ({}) => {
	const { sortBy, sortName } = useAppSelector(state => state.sort)
	const dispatch = useAppDispatch()
	return (
		<div className={styles.catalog__sort}>
			<p>Сортировка:</p>
			<Select
				value={sortName}
				onChange={(e: ChangeEvent<HTMLSelectElement>) =>
					dispatch(setSortName(e.target.value))
				}
				item={[
					{ id: 'price', name: 'Цена' },
					{ id: 'name', name: 'Название' },
				]}
			/>
			<Select
				value={sortBy}
				onChange={(e: ChangeEvent<HTMLSelectElement>) =>
					dispatch(setSortBy(e.target.value))
				}
				item={[
					{ id: 'desc', name: 'По убыванию' },
					{ id: 'asc', name: 'По возрастанию' },
				]}
			/>
		</div>
	)
}

export default CatalogSort
