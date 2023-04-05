import cartSlice, {
	changeCart,
	clearCart,
	ICart,
	removeItem,
	setCart,
} from '../../store/slice/cartSlice'
import { IProduct } from '../../data/dataTypes'

const cartTest: ICart[] = [
	{
		imageUrl: {
			small:
				'https://dostavka.dixy.ru/upload/resize_cache/iblock/a35/200_160_1/a356a1cdbe81af20343d308148d5b8c9.jpg',
			large:
				'https://dostavka.dixy.ru/upload/iblock/f2e/f2e9a2feb9ed55557c03a0bbe38666bf.jpg',
		},
		name: 'Пена для бритья "Gillette"',
		typeSize: 'volume',
		size: '200',
		barcode: '4604049097569',
		manufacturer: 'Procter&Gamble',
		brand: 'Gillеttе',
		description:
			'Мужская пена для бритья Gillette Classic Sensitive для чувствительной кожи обладает легким ароматом, легко наносится и полностью смывается, позволяя мужчинам наслаждаться процедурой бритья, как и много лет назад',
		price: 169.9,
		typeCare: ['Средства для бритья'],
		amount: 1,
	},
	{
		imageUrl: {
			small:
				'https://dostavka.dixy.ru/upload/resize_cache/iblock/720/200_160_1/7208983e33353e55c713b54c5a82a104.jpg',
			large:
				'https://dostavka.dixy.ru/upload/iblock/9e3/9e3d919e917470792a4a580047fc0b7d.jpg',
		},
		name: 'Маска-йогурт для лица "El\'Skin" Клубника, массажная',
		typeSize: 'weight',
		size: '10 ',
		barcode: '4604049097564',
		manufacturer: 'Эдвин Корея Корпорейшн',
		brand: "El'Skin",
		description:
			'Массажная маска-йогурт «КЛУБНИКА» обладает мягкой и нежной текстурой, способствует увлажнению и питанию кожи, оказывает эффект легкого пилинга, придавая коже сияние и свежесть.',
		price: 89.99,
		typeCare: ['Уход за лицом', 'Бумажная продукция'],
		amount: 1,
	},
]
const productTest: IProduct = {
	imageUrl: {
		small:
			'https://dostavka.dixy.ru/upload/resize_cache/iblock/a35/200_160_1/a356a1cdbe81af20343d308148d5b8c9.jpg',
		large:
			'https://dostavka.dixy.ru/upload/iblock/f2e/f2e9a2feb9ed55557c03a0bbe38666bf.jpg',
	},
	name: 'Пена для бритья "Gillette"',
	typeSize: 'volume',
	size: '200',
	barcode: '4604049097569',
	manufacturer: 'Procter&Gamble',
	brand: 'Gillеttе',
	description:
		'Мужская пена для бритья Gillette Classic Sensitive для чувствительной кожи обладает легким ароматом, легко наносится и полностью смывается, позволяя мужчинам наслаждаться процедурой бритья, как и много лет назад',
	price: 169.9,
	typeCare: ['Средства для бритья'],
}
describe('cartSlice', () => {
	test('setCart', () => {
		expect(cartSlice({ cart: [] }, setCart(cartTest))).toEqual({
			cart: cartTest,
		})
	})
	test('changeCart plus product', () => {
		expect(
			cartSlice({ cart: [] }, changeCart({ product: productTest, amount: 1 }))
		).toEqual({
			cart: [{ ...productTest, amount: 1 }],
		})
	})
	test('changeCart minus product', () => {
		expect(
			cartSlice(
				{ cart: [{ ...productTest, amount: 1 }] },
				changeCart({ product: productTest, amount: -1 })
			)
		).toEqual({
			cart: [],
		})
	})
	test('removeItem', () => {
		expect(cartSlice({ cart: cartTest }, removeItem('4604049097564'))).toEqual({
			cart: [{ ...productTest, amount: 1 }],
		})
	})
	test('clearCart', () => {
		expect(cartSlice({ cart: cartTest }, clearCart())).toEqual({
			cart: [],
		})
	})
})
