import { FC } from 'react'
import styles from './Catalog.module.scss'
import CatalogFilters from './CatalogFilters'
import ProductCard from './ProductCard'
import { IProduct } from '../../data/dataTypes'
import Pagination from '../UI/Pagination/Pagination'
import { returnCondition } from '../../utils/returnCondition'
import { setFilterProducts } from '../../store/slice/productsSlice'
import { useProducts } from '../../hooks/useProducts'
import { useAppDispatch, useAppSelector } from '../../hooks/useApp'
import { useResize } from '../../hooks/useResize'

interface CatalogHeaderProps {
	showFilter: boolean
	setShowFilter: (show: boolean) => void
}

const CatalogHead: FC<CatalogHeaderProps> = ({ showFilter, setShowFilter }) => {
	const { products, filterProducts } = useAppSelector(state => state.products)
	const { sortBy, sortName } = useAppSelector(state => state.sort)
	const { page } = useAppSelector(state => state.pagination)
	const { typesCare, manufacturer, brand, to, from } = useAppSelector(
		state => state.filter
	)
	const dispatch = useAppDispatch()
	const isResize = useResize()
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
	return (
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
				<div className={styles.catalog__products_cards} id={'productsCards'}>
					{productsFilter.slice(startIndex, endIndex).map(product => (
						<ProductCard key={product?.barcode} product={product as IProduct} />
					))}
				</div>
				<div className={styles.catalog__pagination}>
					<Pagination products={productsFilter as IProduct[]} />
				</div>
			</div>
		</div>
	)
}

export default CatalogHead
