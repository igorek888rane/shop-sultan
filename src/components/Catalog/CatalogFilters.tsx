import { FC } from 'react'
import styles from './Catalog.module.scss'
import clear from '../../img/catalog/clear.png'
import FilterItem from './FilterItem'
import Button from '../UI/Button/Button'
import Filters from '../UI/Filters/Filters'

const CatalogFilters: FC = () => {
	return (
		<div className={styles.catalog__filters}>
			<div className={styles.filters__item}>
				<p className={styles.filter__head}>ПОДБОР ПО ПАРАМЕТРАМ</p>
				<p className={styles.filter__price}>
					Цена <span>₽</span>
				</p>
				<div className={styles.filter__inputs}>
					<input /> <p> - </p> <input />
				</div>
			</div>
			<FilterItem
				head={{ id: 'manufacturer', name: 'Производитель' }}
				items={[
					"L'Oréal",
					'Торговый Дом Энергон Рус',
					'Beiersdorf AG',
					'Невская косметика',
					'АО Аванта',
					'Procter&Gamble',
					'Sanitelle',
					'Dr.Hand',
					'Unilever',
					'Эдвин Корея Корпорейшн',
					'Биотек Фарм',
				]}
			/>
			<FilterItem
				head={{ id: 'brand', name: 'Бренд' }}
				items={[
					"L'Oreal",
					'Garnier',
					'Karolinger',
					'Nivea',
					'Невская косметика',
					'Мое солнышко',
					'Sanitelle',
					'Old Spice',
					'Dr.Hand',
					'Черный жемчуг',
					'Bioteq',
					"El'Skin",
					'Чистая линия',
				]}
			/>
			<div className={styles.filter__btn}>
				<Button>Показать</Button>
				<Button style={{ padding: '20px' }}>
					<img src={clear} alt='' />
				</Button>
			</div>
			<div className={styles.filter}>
				<Filters
					direction={true}
					item={[
						{
							id: 'body',
							name: 'Уход за телом',
						},
						{
							id: 'hands',
							name: 'Уход за руками',
						},
						{
							id: 'face',
							name: 'Уход за лицом',
						},
						{
							id: 'hair',
							name: 'Уход за волосами',
						},
					]}
				/>
			</div>
		</div>
	)
}

export default CatalogFilters
