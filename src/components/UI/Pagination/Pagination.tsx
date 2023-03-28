import { FC, PropsWithChildren } from 'react'
import styles from './Pagination.module.scss'
import left from '../../../img/pagination/left.png'
import right from '../../../img/pagination/right.png'
import { useAppSelector } from '../../../hooks/useApp'

interface PaginationProps {}

const Pagination: FC<PropsWithChildren<PaginationProps>> = ({}) => {
	const { products } = useAppSelector(state => state.products)
	const page: number[] = []
	for (let i = 1; i <= Math.ceil(products.length / 10); i++) {
		page.push(i)
	}

	return (
		<div className={styles.pagination}>
			<div className={styles.pagination__arrow}>
				<img src={left} alt='' />
			</div>
			<div className={styles.pagination__items}>
				{page.map(el => (
					<div key={el} className={`${styles.pagination__item}`}>
						{el}
					</div>
				))}
			</div>
			<div className={styles.pagination__arrow}>
				<img src={right} alt='' />
			</div>
		</div>
	)
}

export default Pagination
