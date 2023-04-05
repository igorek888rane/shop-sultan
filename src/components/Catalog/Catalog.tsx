import { FC, useState } from 'react'
import styles from './Catalog.module.scss'
import CatalogItems from './CatalogItems'
import CatalogHead from './CatalogHead'

interface CatalogProps {
	header: string
}

const Catalog: FC<CatalogProps> = ({ header }) => {
	const [showFilter, setShowFilter] = useState(false)
	return (
		<div className={styles.catalog}>
			<CatalogHead
				header={header}
				showFilter={showFilter}
				setShowFilter={setShowFilter}
			/>
			<CatalogItems showFilter={showFilter} setShowFilter={setShowFilter} />
		</div>
	)
}

export default Catalog
