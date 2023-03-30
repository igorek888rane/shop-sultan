import { FC, useEffect } from 'react'
import styles from './Pagination.module.scss'
import left from '../../../img/pagination/left.png'
import right from '../../../img/pagination/right.png'
import { useAppDispatch, useAppSelector } from '../../../hooks/useApp'
import { setPage } from '../../../store/slice/paginationSlice'
import { IProduct } from '../../../data/dataTypes'

interface PaginationProps {
	products: IProduct[]
}

const Pagination: FC<PaginationProps> = ({ products }) => {
	const { page } = useAppSelector(state => state.pagination)
	const dispatch = useAppDispatch()
	const pages: number[] = []
	for (let i = 1; i <= Math.ceil(products.length / 10); i++) {
		pages.push(i)
	}
	useEffect(() => {
		if (page < 1) {
			dispatch(setPage(1))
		}
		if (page > Math.ceil(products.length / 10)) {
			dispatch(setPage(Math.ceil(products.length / 10)))
		}
	}, [page])
	useEffect(() => {
		if (pages.length <= 1) {
			dispatch(setPage(1))
		}
	}, [pages])

	return (
		<div className={styles.pagination}>
			<div
				className={styles.pagination__arrow}
				onClick={() => dispatch(setPage(page - 1))}
			>
				<img src={left} alt='' />
			</div>
			<div className={styles.pagination__items}>
				{pages.map(el => (
					<div
						key={el}
						className={`${styles.pagination__item} ${
							page === el ? styles.active : ''
						}`}
						onClick={() => dispatch(setPage(el))}
					>
						{el}
					</div>
				))}
			</div>
			<div
				className={styles.pagination__arrow}
				onClick={() => dispatch(setPage(page + 1))}
			>
				<img src={right} alt='' />
			</div>
		</div>
	)
}

export default Pagination
