import { FC } from 'react'
import styles from './CatalogPage.module.scss'
import products from '../../data/data.json'

const CatalogPage: FC = () => {
	return (
		<main className={styles.catalog}>
			<div>Catalog</div>
		</main>
	)
}

export default CatalogPage
