import { FC } from 'react'
import Catalog from '../components/Catalog/Catalog'
import arrow from '../img/catalog/arrow.png'

const CatalogPage: FC = () => {
	return (
		<main>
			<div className={'content'}>
				<div className={'path'}>
					<p>Главная</p>
					<p className={'path__here'}>Каталог</p>
				</div>
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
