import { FC, useMemo, useState } from 'react'
import styles from './Catalog.module.scss'
import Input from '../UI/Input/Input'
import searchIcon from '../../img/input/search.png'
import CheckBox from '../UI/CheckBox/CheckBox'
import products from '../../data/data.json'

interface FilterItemProps {
	head: { id: string; name: string }
	items: string[]
}

const FilterItem: FC<FilterItemProps> = ({ head, items }) => {
	const [search, setSearch] = useState('')
	const filterItems = useMemo(() => {
		return items.filter(i => i.toLowerCase().includes(search.toLowerCase()))
	}, [search])
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
					filterItems.map(name => (
						<CheckBox
							key={name}
							name={name}
							products={products}
							head={head.id}
						/>
					))
				) : (
					<p>Ничего не найденно</p>
				)}
			</div>
		</div>
	)
}

export default FilterItem
