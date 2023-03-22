import { FC } from 'react'
import styles from './Catalog.module.scss'
import products from '../../data/data.json'
import Filters from '../UI/Filters/Filters'
import Select from '../UI/Select/Select'
import Product from './Product'
import { IProduct } from '../../data/dataTypes'

interface CatalogProps {
	header: string
}

const Catalog: FC<CatalogProps> = ({ header }) => {
	return (
		<div className={styles.catalog}>
			<div className={styles.head}>
				<h1>{header}</h1>
				<div className={styles.catalog__sort}>
					<p>Сортировка:</p>
					<Select
						item={[
							{ id: 'price', name: 'Цена' },
							{ id: 'name', name: 'Название' },
						]}
					/>
					<Select
						item={[
							{ id: 'desc', name: 'По убыванию' },
							{ id: 'asc', name: 'По возратсанию' },
						]}
					/>
				</div>
			</div>
			<Filters
				item={[
					{
						id: 'body',
						name: 'Уход за телом',
					},
					{
						id: 'hands',
						name: 'Уход за руками',
					},
					{
						id: 'face',
						name: 'Уход за лицом',
					},
					{
						id: 'hair',
						name: 'Уход за волосами',
					},
				]}
			/>
			<div className={styles.catalog__items}>
				<div className={styles.catalog__filters}>1</div>
				<div className={styles.catalog__products}>
					{products.map(product => (
						<Product product={product as IProduct} />
					))}
				</div>
			</div>
		</div>
	)
}

export default Catalog
