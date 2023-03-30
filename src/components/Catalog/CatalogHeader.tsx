import { FC } from 'react'
import styles from './Catalog.module.scss'
import arrow from '../../img/catalog/arrow.png'

interface CatalogHeaderProps {
	header: string
	showFilter: boolean
	setShowFilter: (show: boolean) => void
}

const CatalogHeader: FC<CatalogHeaderProps> = ({
	header,
	showFilter,
	setShowFilter,
}) => {
	return (
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
	)
}

export default CatalogHeader
