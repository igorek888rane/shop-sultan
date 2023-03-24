import { ChangeEvent, FC } from 'react'
import styles from './Catalog.module.scss'
import clear from '../../img/catalog/clear.png'
import FilterItem from './FilterItem'
import Button from '../UI/Button/Button'
import Filters from '../UI/Filters/Filters'
import { useAppDispatch, useAppSelector } from '../../hooks/useApp'
import InputPrice from '../UI/InputPrice/InputPrice'
import { setFrom, setTo } from '../../store/slice/filterSlice'

const CatalogFilters: FC = () => {
	const { brand, manufacturer, typesCare, from, to } = useAppSelector(
		state => state.filter
	)
	const dispatch = useAppDispatch()
	const showFilterProducts = () => {}
	const clearFilter = () => {}
	return (
		<div className={styles.catalog__filters}>
			<p className={styles.catalog__head}>ПОДБОР ПО ПАРАМЕТРАМ </p>
			<div className={styles.filters__item}>
				<p className={styles.filter__price}>
					Цена <span>₽</span>
				</p>
				<div className={styles.filter__inputs}>
					<InputPrice
						type={'text'}
						placeholder={'от'}
						value={from}
						onChange={(e: ChangeEvent<HTMLInputElement>) =>
							!isNaN(+e.target.value) && dispatch(setFrom(e.target.value))
						}
					/>
					<p> - </p>
					<InputPrice
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
				<Button onClick={showFilterProducts}>Показать</Button>
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
