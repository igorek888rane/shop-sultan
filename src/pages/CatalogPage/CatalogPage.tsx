import { FC, useEffect } from 'react'
import styles from './CatalogPage.module.scss'
import Catalog from '../../components/Catalog/Catalog'
import { setFilterProducts, setProducts } from '../../store/slice/productsSlice'
import data from '../../data/data.json'
import { useAppDispatch } from '../../hooks/useApp'

const CatalogPage: FC = () => {
	const dispatch = useAppDispatch()

	useEffect(() => {
		if (localStorage.getItem('products')) {
			dispatch(
				setProducts(JSON.parse(localStorage.getItem('products') as string))
			)
			dispatch(
				setFilterProducts(
					JSON.parse(localStorage.getItem('products') as string)
				)
			)
		} else {
			localStorage.setItem('products', JSON.stringify(data))
		}
	}, [])
	return (
		<main className={styles.catalog}>
			<div className={'content'}>
				<div className={'path'}>
					<p>Главная</p>
					<p className={'path__here'}>Каталог</p>
				</div>
				<Catalog header={'Косметика и гигиена'} />
			</div>
		</main>
	)
}

export default CatalogPage
