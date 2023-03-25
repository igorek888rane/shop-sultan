import { FC, useEffect, useMemo, useState } from 'react'
import styles from './Catalog.module.scss'
import Input from '../UI/Input/Input'
import searchIcon from '../../img/input/search.png'
import arrow from '../../img/catalog/arrowFilter.png'
import CheckBox from '../UI/CheckBox/CheckBox'
import products from '../../data/data.json'
import { filterType } from '../../store/slice/filterSlice'
import { useAppSelector } from '../../hooks/useApp'

interface FilterItemProps {
	head: { id: string; name: string }
	items: filterType[]
}

const FilterItem: FC<FilterItemProps> = ({ head, items }) => {
	const [search, setSearch] = useState('')
	const [show, setShow] = useState(false)
	const { clear } = useAppSelector(state => state.filter)

	const filterItems = useMemo(() => {
		const filter = items.filter(i =>
			i.name.toLowerCase().includes(search.toLowerCase())
		)
		if (show) {
			return filter
		}
		filter.length = 4
		return filter
	}, [search, show])
	useEffect(() => {
		setSearch('')
	}, [clear])

	return (
		<div className={styles.filters__item}>
			<p className={styles.filter__head}>{head.name}</p>
			<div className={styles.filter__input}>
				<Input
					type={'text'}
					placeholder={'Поиск...'}
					img={searchIcon}
					value={search}
					onChange={setSearch}
				/>
			</div>
			<div className={styles.filter__checkbox}>
				{filterItems.length ? (
					filterItems.map(filter => (
						<CheckBox
							key={filter.name}
							filter={filter}
							products={products}
							head={head.id}
						/>
					))
				) : (
					<p>Ничего не найденно</p>
				)}
				<div className={styles.filter__show} onClick={() => setShow(!show)}>
					<p>{show ? 'Скрыть' : 'Показать все'}</p>
					<div className={show ? styles.show : ''}>
						<img src={arrow} alt='' />
					</div>
				</div>
			</div>
		</div>
	)
}

export default FilterItem
