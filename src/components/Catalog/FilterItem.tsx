import { FC } from 'react'
import styles from './Catalog.module.scss'
import Input from '../UI/Input/Input'
import search from '../../img/input/search.png'
import CheckBox from '../UI/CheckBox/CheckBox'
import products from '../../data/data.json'

interface FilterItemProps {
	head: { id: string; name: string }
	items: string[]
}

const FilterItem: FC<FilterItemProps> = ({ head, items }) => {
	return (
		<div className={styles.filters__item}>
			<p className={styles.filter__head}>{head.name}</p>
			<div className={styles.filter__input}>
				<Input type={'text'} placeholder={'Поиск...'} img={search} />
			</div>
			<div className={styles.filter__checkbox}>
				{items.map(name => (
					<CheckBox key={name} name={name} products={products} head={head.id} />
				))}
			</div>
		</div>
	)
}

export default FilterItem
