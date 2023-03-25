import { IProduct } from '../data/dataTypes'

interface IReturnCondition {
	el: IProduct
	brandActive: string[]
	manufacturerActive: string[]
	from: string
	to: string
}

export const returnCondition = ({
	el,
	brandActive,
	manufacturerActive,
	from,
	to,
}: IReturnCondition) => {
	if (!brandActive.length) {
		return (
			el.price >= +from &&
			el.price <= +to &&
			manufacturerActive.includes(el.manufacturer)
		)
	}
	if (!manufacturerActive.length) {
		return (
			el.price >= +from && el.price <= +to && brandActive.includes(el.brand)
		)
	}

	return (
		el.price >= +from &&
		el.price <= +to &&
		brandActive.includes(el.brand) &&
		manufacturerActive.includes(el.manufacturer)
	)
}
