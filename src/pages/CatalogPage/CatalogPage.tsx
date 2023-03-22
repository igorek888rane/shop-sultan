import { FC } from 'react'
import styles from './CatalogPage.module.scss'
import Catalog from '../../components/Catalog/Catalog'

const CatalogPage: FC = () => {
	return (
		<main className={styles.catalog}>
			<div className={'content'}>
				<div className={'path'}>
					<p>Главная</p>
					<p className={'path__here'}>Косметика и гигиена</p>
				</div>
				<Catalog header={'Косметика и гигиена'} />
			</div>
		</main>
	)
}

export default CatalogPage
