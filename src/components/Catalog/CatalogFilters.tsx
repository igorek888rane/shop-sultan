import { ChangeEvent, FC } from 'react'
import styles from './Catalog.module.scss'
import clear from '../../img/catalog/clear.png'
import FilterItem from './FilterItem'
import Button from '../UI/Button/Button'
import Filters from '../UI/Filters/Filters'
import { useAppDispatch, useAppSelector } from '../../hooks/useApp'
import Input from '../UI/Input/Input'
import { setClear, setFrom, setTo } from '../../store/slice/filterSlice'
import { setFilterProducts } from '../../store/slice/productsSlice'
import { useResize } from '../../hooks/useResize'

interface CatalogFiltersProps {
	showFilterProducts: () => void
	showFilter: boolean
	setShowFilter: (show: boolean) => void
}

const CatalogFilters: FC<CatalogFiltersProps> = ({
	showFilterProducts,
	showFilter,
	setShowFilter,
}) => {
	const { brand, manufacturer, typesCare, from, to } = useAppSelector(
		state => state.filter
	)
	const { products } = useAppSelector(state => state.products)

	const dispatch = useAppDispatch()
	const isResize = useResize()

	const clearFilter = () => {
		dispatch(setClear())
		dispatch(setFilterProducts(products))
		if (isResize) {
			setShowFilter(!showFilter)
		}
	}
	return (
		<div
			style={isResize ? { display: showFilter ? 'flex' : 'none' } : {}}
			className={styles.catalog__filters}
		>
			<p className={styles.catalog__head}>ПОДБОР ПО ПАРАМЕТРАМ </p>
			<div className={styles.filters__item}>
				<p className={styles.filter__price}>
					Цена <span>₽</span>
				</p>
				<div className={styles.filter__inputs}>
					<Input
						type={'text'}
						placeholder={'от'}
						value={from}
						onChange={(e: ChangeEvent<HTMLInputElement>) =>
							!isNaN(+e.target.value) && dispatch(setFrom(e.target.value))
						}
					/>
					<p> - </p>
					<Input
						type={'text'}
						placeholder={'до'}
						value={to}
						onChange={(e: ChangeEvent<HTMLInputElement>) =>
							!isNaN(+e.target.value) && dispatch(setTo(e.target.value))
						}
					/>
				</div>
			</div>
			<FilterItem
				head={{ id: 'manufacturer', name: 'Производитель' }}
				items={manufacturer}
			/>
			<FilterItem head={{ id: 'brand', name: 'Бренд' }} items={brand} />
			<div className={styles.filter__btn}>
				<Button id={'show'} onClick={showFilterProducts}>
					Показать
				</Button>
				<Button onClick={clearFilter} style={{ padding: '20px' }}>
					<img src={clear} alt='' />
				</Button>
			</div>
			<div className={styles.filter}>
				<Filters direction={true} items={typesCare} />
			</div>
		</div>
	)
}

export default CatalogFilters
