import { FC, useEffect, useRef, useState } from 'react'
import styles from './Catalog.module.scss'
import Filters from '../UI/Filters/Filters'
import ProductCard from './ProductCard'
import { IProduct } from '../../data/dataTypes'
import CatalogFilters from './CatalogFilters'
import { useAppDispatch, useAppSelector } from '../../hooks/useApp'
import { useProducts } from '../../hooks/useProducts'
import { setFilterProducts } from '../../store/slice/productsSlice'
import { returnCondition } from '../../utils/returnCondition'
import { useResize } from '../../hooks/useResize'
import Pagination from '../UI/Pagination/Pagination'
import CatalogSort from './CatalogSort'
import CatalogHeader from './CatalogHeader'

interface CatalogProps {
	header: string
}

const Catalog: FC<CatalogProps> = ({ header }) => {
	const { products, filterProducts } = useAppSelector(state => state.products)
	const { sortBy, sortName } = useAppSelector(state => state.sort)
	const { page } = useAppSelector(state => state.pagination)
	const { typesCare, manufacturer, brand, to, from } = useAppSelector(
		state => state.filter
	)

	const dispatch = useAppDispatch()
	const isResize = useResize()
	const [showFilter, setShowFilter] = useState(false)
	const headRef = useRef<HTMLDivElement>(null)

	const startIndex = (page - 1) * 10
	const endIndex = page * 10
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
		if (isResize) {
			setShowFilter(!showFilter)
		}
	}

	useEffect(() => {
		if (headRef.current) {
			headRef.current.scrollIntoView({ block: 'start', behavior: 'smooth' })
		}
	}, [page])
	return (
		<div className={styles.catalog}>
			<div className={styles.head} ref={headRef}>
				<CatalogHeader
					header={header}
					showFilter={showFilter}
					setShowFilter={setShowFilter}
				/>
				<CatalogSort />
				<Filters items={typesCare} />
			</div>

			<div className={styles.catalog__items}>
				<CatalogFilters
					showFilterProducts={showFilterProducts}
					showFilter={showFilter}
					setShowFilter={setShowFilter}
				/>
				<div
					className={styles.catalog__products}
					style={isResize ? { display: !showFilter ? 'flex' : 'none' } : {}}
				>
					<div className={styles.catalog__products_cards}>
						{productsFilter.slice(startIndex, endIndex).map(product => (
							<ProductCard
								key={product?.barcode}
								product={product as IProduct}
							/>
						))}
					</div>
					<div className={styles.catalog__pagination}>
						<Pagination products={productsFilter as IProduct[]} />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Catalog
