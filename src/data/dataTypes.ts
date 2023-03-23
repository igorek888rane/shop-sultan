export interface IProduct {
	imageUrl: {
		small: string
		large: string
	}
	name: string
	typeSize: string
	size: string
	barcode: string
	manufacturer: string
	brand: string
	description: string
	price: number
	typeCare: string[]
}
