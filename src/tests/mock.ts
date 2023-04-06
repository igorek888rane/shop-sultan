import { ICart } from '../store/slice/cartSlice'
import { IProduct } from '../data/dataTypes'

export const cartTest: ICart[] = [
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
export const productTest: IProduct = {
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
export const products = [
	{
		imageUrl: {
			small:
				'https://dostavka.dixy.ru/upload/resize_cache/iblock/300/200_160_1/2000229474.jpg',
			large: 'https://dostavka.dixy.ru/upload/iblock/403/2000229474.jpg',
		},
		name: 'Мицеллярная вода "Garnier"',
		typeSize: 'volume',
		size: '400 ',
		barcode: '4604049097549',
		manufacturer: "L'Oreal",
		brand: 'Garnier',
		description:
			'Нежная мицеллярная вода Garnier «3 в 1» бережно снимает макияж, очищает поры и успокаивает кожу. ',
		price: 450,
		typeCare: ['Уход за лицом'],
	},
	{
		imageUrl: {
			small:
				'https://dostavka.dixy.ru/upload/resize_cache/iblock/200/200_160_1/2008fcb446418da9008215c40df32f56.jpg',
			large:
				'https://dostavka.dixy.ru/upload/iblock/226/2268262b0e46111be9b4ecaf32b9926d.jpg',
		},
		name: "Шампунь L'Oreal Paris",
		typeSize: 'volume',
		size: '200',
		barcode: '4604049097548',
		manufacturer: "L'Oreal",
		brand: "L'Oreal",
		description: 'Эксперт цвета Фиолетовый против желтизны',
		price: 300,
		typeCare: ['Уход за волосами'],
	},
	{
		imageUrl: {
			small:
				'https://dostavka.dixy.ru/upload/resize_cache/iblock/0db/200_160_1/0db945a65360bb42d22730dd69d402dd.jpg',
			large:
				'https://dostavka.dixy.ru/upload/iblock/436/436f65d9590a2074d83ba8402edca829.jpg',
		},
		name: 'Шампунь "L\'Oreal" Paris Elseve',
		typeSize: 'volume',
		size: '400 ',
		barcode: '4604049097565',
		manufacturer: "L'Oreal",
		brand: "L'Oreal",
		description:
			'Уникальная формула шампуня обогащена питательным коктейлем, который запечатывает секущиеся кончики и восстанавливает по всей длине: ',
		price: 400,
		typeCare: ['Уход за волосами'],
	},
]
export const cart = [
	{
		imageUrl: {
			small:
				'https://dostavka.dixy.ru/upload/resize_cache/iblock/200/200_160_1/2008fcb446418da9008215c40df32f56.jpg',
			large:
				'https://dostavka.dixy.ru/upload/iblock/226/2268262b0e46111be9b4ecaf32b9926d.jpg',
		},
		name: "Шампунь L'Oreal Paris",
		typeSize: 'volume',
		size: '200',
		barcode: '4604049097548',
		manufacturer: "L'Oreal",
		brand: "L'Oreal",
		description: 'Эксперт цвета Фиолетовый против желтизны',
		price: 300,
		typeCare: ['Уход за волосами'],
		amount: 1,
	},
	{
		imageUrl: {
			small:
				'https://dostavka.dixy.ru/upload/resize_cache/iblock/0db/200_160_1/0db945a65360bb42d22730dd69d402dd.jpg',
			large:
				'https://dostavka.dixy.ru/upload/iblock/436/436f65d9590a2074d83ba8402edca829.jpg',
		},
		name: 'Шампунь "L\'Oreal" Paris Elseve',
		typeSize: 'volume',
		size: '400 ',
		barcode: '4604049097565',
		manufacturer: "L'Oreal",
		brand: "L'Oreal",
		description:
			'Уникальная формула шампуня обогащена питательным коктейлем, который запечатывает секущиеся кончики и восстанавливает по всей длине: ',
		price: 400,
		typeCare: ['Уход за волосами'],
		amount: 2,
	},
	{
		imageUrl: {
			small:
				'https://dostavka.dixy.ru/upload/resize_cache/iblock/300/200_160_1/2000229474.jpg',
			large: 'https://dostavka.dixy.ru/upload/iblock/403/2000229474.jpg',
		},
		name: 'Мицеллярная вода "Garnier"',
		typeSize: 'volume',
		size: '400 ',
		barcode: '4604049097549',
		manufacturer: "L'Oreal",
		brand: 'Garnier',
		description:
			'Нежная мицеллярная вода Garnier «3 в 1» бережно снимает макияж, очищает поры и успокаивает кожу. ',
		price: 450,
		typeCare: ['Уход за лицом'],
		amount: 3,
	},
]
export const productsSortName = [
	{
		imageUrl: {
			small:
				'https://dostavka.dixy.ru/upload/resize_cache/iblock/300/200_160_1/2000229474.jpg',
			large: 'https://dostavka.dixy.ru/upload/iblock/403/2000229474.jpg',
		},
		name: 'Мицеллярная вода "Garnier"',
		typeSize: 'volume',
		size: '400 ',
		barcode: '4604049097549',
		manufacturer: "L'Oreal",
		brand: 'Garnier',
		description:
			'Нежная мицеллярная вода Garnier «3 в 1» бережно снимает макияж, очищает поры и успокаивает кожу. ',
		price: 450,
		typeCare: ['Уход за лицом'],
	},
	{
		imageUrl: {
			small:
				'https://dostavka.dixy.ru/upload/resize_cache/iblock/0db/200_160_1/0db945a65360bb42d22730dd69d402dd.jpg',
			large:
				'https://dostavka.dixy.ru/upload/iblock/436/436f65d9590a2074d83ba8402edca829.jpg',
		},
		name: 'Шампунь "L\'Oreal" Paris Elseve',
		typeSize: 'volume',
		size: '400 ',
		barcode: '4604049097565',
		manufacturer: "L'Oreal",
		brand: "L'Oreal",
		description:
			'Уникальная формула шампуня обогащена питательным коктейлем, который запечатывает секущиеся кончики и восстанавливает по всей длине: ',
		price: 400,
		typeCare: ['Уход за волосами'],
	},
	{
		imageUrl: {
			small:
				'https://dostavka.dixy.ru/upload/resize_cache/iblock/200/200_160_1/2008fcb446418da9008215c40df32f56.jpg',
			large:
				'https://dostavka.dixy.ru/upload/iblock/226/2268262b0e46111be9b4ecaf32b9926d.jpg',
		},
		name: "Шампунь L'Oreal Paris",
		typeSize: 'volume',
		size: '200',
		barcode: '4604049097548',
		manufacturer: "L'Oreal",
		brand: "L'Oreal",
		description: 'Эксперт цвета Фиолетовый против желтизны',
		price: 300,
		typeCare: ['Уход за волосами'],
	},
]
export const productsSortPrice = [
	{
		imageUrl: {
			small:
				'https://dostavka.dixy.ru/upload/resize_cache/iblock/200/200_160_1/2008fcb446418da9008215c40df32f56.jpg',
			large:
				'https://dostavka.dixy.ru/upload/iblock/226/2268262b0e46111be9b4ecaf32b9926d.jpg',
		},
		name: "Шампунь L'Oreal Paris",
		typeSize: 'volume',
		size: '200',
		barcode: '4604049097548',
		manufacturer: "L'Oreal",
		brand: "L'Oreal",
		description: 'Эксперт цвета Фиолетовый против желтизны',
		price: 300,
		typeCare: ['Уход за волосами'],
	},
	{
		imageUrl: {
			small:
				'https://dostavka.dixy.ru/upload/resize_cache/iblock/0db/200_160_1/0db945a65360bb42d22730dd69d402dd.jpg',
			large:
				'https://dostavka.dixy.ru/upload/iblock/436/436f65d9590a2074d83ba8402edca829.jpg',
		},
		name: 'Шампунь "L\'Oreal" Paris Elseve',
		typeSize: 'volume',
		size: '400 ',
		barcode: '4604049097565',
		manufacturer: "L'Oreal",
		brand: "L'Oreal",
		description:
			'Уникальная формула шампуня обогащена питательным коктейлем, который запечатывает секущиеся кончики и восстанавливает по всей длине: ',
		price: 400,
		typeCare: ['Уход за волосами'],
	},
	{
		imageUrl: {
			small:
				'https://dostavka.dixy.ru/upload/resize_cache/iblock/300/200_160_1/2000229474.jpg',
			large: 'https://dostavka.dixy.ru/upload/iblock/403/2000229474.jpg',
		},
		name: 'Мицеллярная вода "Garnier"',
		typeSize: 'volume',
		size: '400 ',
		barcode: '4604049097549',
		manufacturer: "L'Oreal",
		brand: 'Garnier',
		description:
			'Нежная мицеллярная вода Garnier «3 в 1» бережно снимает макияж, очищает поры и успокаивает кожу. ',
		price: 450,
		typeCare: ['Уход за лицом'],
	},
]
