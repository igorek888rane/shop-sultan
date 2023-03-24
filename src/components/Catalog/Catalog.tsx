import { ChangeEvent, FC, useState } from 'react'
import styles from './Catalog.module.scss'
import arrow from '../../img/catalog/arrow.png'

import Filters from '../UI/Filters/Filters'
import Select from '../UI/Select/Select'
import ProductCard from './ProductCard'
import { IProduct } from '../../data/dataTypes'
import CatalogFilters from './CatalogFilters'
import { useAppSelector } from '../../hooks/useApp'
import { useProducts } from '../../hooks/useProducts'

interface CatalogProps {
	header: string
}

const Catalog: FC<CatalogProps> = ({ header }) => {
	const { products } = useAppSelector(state => state.products)
	const { typeCare, typesCare } = useAppSelector(state => state.filter)
	const [sortName, setSortName] = useState('name')
	const [sortBy, setSortBy] = useState('desc')
	const productsFilter = useProducts({ products, typeCare, sortName, sortBy })
	return (
		<div className={styles.catalog}>
			<div className={styles.head}>
				<div className={styles.catalog__header}>
					<h1>{header}</h1>
					<div className={styles.catalog__head}>
						<p>ПОДБОР ПО ПАРАМЕТРАМ</p>
						<div className={styles.arrow}>
							<img src={arrow} alt='' />
						</div>
					</div>
				</div>
				<div className={styles.catalog__sort}>
					<p>Сортировка:</p>
					<Select
						value={sortName}
						onChange={(e: ChangeEvent<HTMLSelectElement>) =>
							setSortName(e.target.value)
						}
						item={[
							{ id: 'price', name: 'Цена' },
							{ id: 'name', name: 'Название' },
						]}
					/>
					<Select
						value={sortBy}
						onChange={(e: ChangeEvent<HTMLSelectElement>) =>
							setSortBy(e.target.value)
						}
						item={[
							{ id: 'desc', name: 'По убыванию' },
							{ id: 'asc', name: 'По возрастанию' },
						]}
					/>
				</div>
				<Filters items={typesCare} />
			</div>

			<div className={styles.catalog__items}>
				<CatalogFilters />
				<div className={styles.catalog__products}>
					{productsFilter.map(product => (
						<ProductCard key={product.barcode} product={product as IProduct} />
					))}
				</div>
			</div>
		</div>
	)
}

export default Catalog
