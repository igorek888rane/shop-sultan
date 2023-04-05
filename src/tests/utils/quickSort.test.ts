import { quickSort } from '../../utils/quickSort'

export {}
const products = [
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
describe('calcValue', () => {
	test('По названию ', () => {
		expect(quickSort(products, 'name')).toEqual([
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
		])
	})
	test('По цене', () => {
		expect(quickSort(products, 'price')).toEqual([
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
		])
	})
	test('Пустой массив', () => {
		expect(quickSort([], '')).toEqual([])
	})
})
