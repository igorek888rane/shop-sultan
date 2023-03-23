import { FC } from 'react'
import styles from './Catalog.module.scss'
import Filters from '../UI/Filters/Filters'
import Select from '../UI/Select/Select'
import ProductCard from './ProductCard'
import { IProduct } from '../../data/dataTypes'
import CatalogFilters from './CatalogFilters'
import { useAppSelector } from '../../hooks/useApp'

interface CatalogProps {
	header: string
}

const Catalog: FC<CatalogProps> = ({ header }) => {
	const { products } = useAppSelector(state => state.products)

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
				<CatalogFilters />
				<div className={styles.catalog__products}>
					{products.map(product => (
						<ProductCard key={product.barcode} product={product as IProduct} />
					))}
				</div>
			</div>
		</div>
	)
}

export default Catalog
