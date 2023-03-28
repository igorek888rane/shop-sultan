import { FC } from 'react'
import styles from './Catalog.module.scss'
import volume from '../../img/catalog/volume.png'
import weight from '../../img/catalog/weight.png'
import cart from '../../img/catalog/cart.png'
import { IProduct } from '../../data/dataTypes'
import Button from '../UI/Button/Button'
import { setCart } from '../../store/slice/cartSlice'
import { useAppDispatch } from '../../hooks/useApp'
import { Link } from 'react-router-dom'

interface ProductProps {
	product: IProduct
}

const ProductCard: FC<ProductProps> = ({ product }) => {
	const dispatch = useAppDispatch()
	return (
		<div className={styles.product}>
			<Link to={`/${product.barcode}`} className={styles.product__img}>
				<img src={product.imageUrl.small} alt='' />
			</Link>
			<div className={styles.product__size}>
				<img src={product.typeSize === 'volume' ? volume : weight} alt='' />
				<p>{product.size}</p>
			</div>
			<div className={styles.product__name}>{product.name}</div>
			<div className={styles.product__info}>
				<p>
					Штрихкод: <span>{product.barcode}</span>
				</p>
				<p>
					Производитель: <span>{product.manufacturer}</span>
				</p>
				<p>
					Бренд: <span>{product.brand}</span>
				</p>
			</div>
			<div className={styles.product__cart}>
				<p className={styles.product__cart__price}>{product.price}₽</p>
				<Button
					onClick={() => dispatch(setCart({ product, amount: 1 }))}
					style={{ padding: '21px 25px ' }}
				>
					<p>В КОРЗИНУ</p>
					<img src={cart} alt='' />
				</Button>
			</div>
		</div>
	)
}

export default ProductCard
