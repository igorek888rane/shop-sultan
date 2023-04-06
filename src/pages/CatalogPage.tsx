import { FC } from 'react'
import Catalog from '../components/Catalog/Catalog'
import arrow from '../img/catalog/arrow.png'
import Path from '../components/Path/Path'

const CatalogPage: FC = () => {
	return (
		<main data-testid='catalog-page'>
			<div className={'content'}>
				<Path name={'Каталог'} />
				<div className={'back'}>
					<div className={'arrow'}>
						<img src={arrow} alt='' />
					</div>
					<p>НАЗАД</p>
				</div>
				<Catalog header={'Косметика и гигиена'} />
			</div>
		</main>
	)
}

export default CatalogPage
