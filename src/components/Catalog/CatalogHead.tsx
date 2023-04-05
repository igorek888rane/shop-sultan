import { FC, useEffect, useRef } from 'react'
import styles from './Catalog.module.scss'
import CatalogHeader from './CatalogHeader'
import CatalogSort from './CatalogSort'
import Filters from '../UI/Filters/Filters'
import { useAppSelector } from '../../hooks/useApp'

interface CatalogHeaderProps {
	header: string
	showFilter: boolean
	setShowFilter: (show: boolean) => void
}

const CatalogHead: FC<CatalogHeaderProps> = ({
	header,
	showFilter,
	setShowFilter,
}) => {
	const { page } = useAppSelector(state => state.pagination)
	const { typesCare } = useAppSelector(state => state.filter)
	const headRef = useRef<HTMLDivElement>(null)
	useEffect(() => {
		if (headRef.current) {
			headRef.current.scrollIntoView({ block: 'start', behavior: 'smooth' })
		}
	}, [page])
	return (
		<div className={styles.head} ref={headRef}>
			<CatalogHeader
				header={header}
				showFilter={showFilter}
				setShowFilter={setShowFilter}
			/>
			<CatalogSort />
			<Filters items={typesCare} />
		</div>
	)
}

export default CatalogHead
