import { ChangeEvent, FC, useState } from 'react'
import styles from './Catalog.module.scss'
import arrow from '../../img/catalog/arrow.png'
import Filters from '../UI/Filters/Filters'
import Select from '../UI/Select/Select'
import ProductCard from './ProductCard'
import { IProduct } from '../../data/dataTypes'
import CatalogFilters from './CatalogFilters'
import { useAppDispatch, useAppSelector } from '../../hooks/useApp'
import { useProducts } from '../../hooks/useProducts'
import { setFilterProducts } from '../../store/slice/productsSlice'
import { returnCondition } from '../../utils/returnCondition'
import { useResize } from '../../hooks/useResize'
import Pagination from '../UI/Pagination/Pagination'

interface CatalogProps {
	header: string
}

const Catalog: FC<CatalogProps> = ({ header }) => {
	const { products, filterProducts } = useAppSelector(state => state.products)
	const { typesCare, manufacturer, brand, to, from } = useAppSelector(
		state => state.filter
	)

	const dispatch = useAppDispatch()
	const [sortName, setSortName] = useState('name')
	const [sortBy, setSortBy] = useState('desc')
	const [showFilter, setShowFilter] = useState(false)

	let productsFilter = useProducts({
		products: filterProducts,
		typesCare,
		sortName,
		sortBy,
	})
	const showFilterProducts = () => {
		let brandActive = brand.filter(el => el.active).map(el => el.name)
		let manufacturerActive = manufacturer
			.filter(el => el.active)
			.map(el => el.name)
		let filter
		if (!brandActive.length && !manufacturerActive.length) {
			filter = products.filter(el => el.price >= +from && el.price <= +to)
		} else {
			filter = products.filter(el =>
				returnCondition({ el, brandActive, manufacturerActive, from, to })
			)
		}
		dispatch(setFilterProducts(filter))
	}

	return (
		<div className={styles.catalog}>
			<div className={styles.head}>
				<div className={styles.catalog__header}>
					<h1>{header}</h1>
					<div className={styles.catalog__head}>
						<p>ПОДБОР ПО ПАРАМЕТРАМ</p>
						<div
							onClick={() => setShowFilter(!showFilter)}
							className={`${styles.arrow} ${showFilter ? styles.show : ''}`}
						>
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
				<CatalogFilters
					showFilterProducts={showFilterProducts}
					show={showFilter}
				/>
				<div
					className={styles.catalog__products}
					style={useResize() ? { display: !showFilter ? 'flex' : 'none' } : {}}
				>
					<div className={styles.catalog__products_cards}>
						{productsFilter.map(product => (
							<ProductCard
								key={product?.barcode}
								product={product as IProduct}
							/>
						))}
					</div>
					<div className={styles.catalog__pagination}>
						<Pagination />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Catalog
