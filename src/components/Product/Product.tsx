import { FC, useState } from 'react'
import styles from './Product.module.scss'
import { useAppDispatch, useAppSelector } from '../../hooks/useApp'
import volume from '../../img/catalog/volume.png'
import weight from '../../img/catalog/weight.png'
import { changeCart } from '../../store/slice/cartSlice'
import cart from '../../img/catalog/cart.png'
import share from '../../img/product/share.png'
import download from '../../img/product/download.png'
import Button from '../UI/Button/Button'
import ChangeCartItem from '../UI/ChangeCartItem/ChangeCartItem'
import arrow from '../../img/catalog/arrowFilter.png'

const Product: FC = () => {
	const { product } = useAppSelector(state => state.products)
	const dispatch = useAppDispatch()
	const [show, setShow] = useState(false)

	return (
		<div className={styles.product}>
			<div className={styles.product__img}>
				<img src={product?.imageUrl.large} alt='' />
			</div>
			<div className={styles.product__info}>
				<p className={styles.product__available}>В наличии</p>
				<p className={styles.product__name}>{product?.name}</p>
				<div className={styles.product__size}>
					<img src={product?.typeSize === 'volume' ? volume : weight} alt='' />
					<p>{product?.size}</p>
				</div>
				<div className={styles.product__price}>
					<p className={styles.product__name}>{product?.price} ₽</p>
					<ChangeCartItem product={product} />
					<Button
						onClick={() =>
							product && dispatch(changeCart({ product, amount: 1 }))
						}
						style={{ padding: '21px 25px ' }}
					>
						<p>В КОРЗИНУ</p>
						<img src={cart} alt='' />
					</Button>
					<div className={`${styles.product__item} ${styles.up}`}>
						<img src={share} alt='' />
					</div>
				</div>
				<div className={styles.product__items}>
					<div className={`${styles.product__item} ${styles.up}`}>
						<img src={share} alt='' />
					</div>
					<div className={styles.product__item}>
						<p>
							При покупке от <span className={styles.bold}>10 000 ₽</span>{' '}
							бесплатная доставка по Кокчетаву и области
						</p>
					</div>
					<div className={styles.product__item}>
						<p className={styles.bold}>Прайс лист</p>
						<img src={download} alt='' />
					</div>
				</div>
				<div className={styles.product__characteristic}>
					<p className={styles.product__text}>
						Производитель:{' '}
						<span className={styles.info}>{product?.manufacturer}</span>
					</p>
					<p className={styles.product__text}>
						Бренд: <span className={styles.info}>{product?.brand}</span>
					</p>
					<p className={styles.product__text}>
						Артикул: <span className={styles.info}>460404</span>
					</p>
					<p className={styles.product__text}>
						Кол-во в коробке: <span className={styles.info}>2</span>
					</p>
					<p className={styles.product__text}>
						Штрихкод: <span className={styles.info}>{product?.barcode}</span>
					</p>
					<p className={styles.product__text}>
						Размеры коробки(Д*Ш*В):{' '}
						<span className={styles.info}>10х10х10</span>
					</p>
					<p className={styles.product__text}>
						{product?.typeSize === 'weight' ? 'Вес коробки:' : 'Объем:'}{' '}
						<span className={styles.info}>{product?.size}</span>
					</p>
				</div>
				<div className={styles.product__description}>
					<div className={styles.product__show} onClick={() => setShow(!show)}>
						<p>Описание</p>
						<div className={show ? styles.show : ''}>
							<img src={arrow} alt='' />
						</div>
					</div>
					<p
						style={{ display: show ? 'block' : 'none' }}
						className={styles.description}
					>
						{product?.description}
					</p>
				</div>
			</div>
		</div>
	)
}

export default Product
