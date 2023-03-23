import { IProduct } from '../data/dataTypes'
import { useMemo } from 'react'

interface IUseFilterByCareType {
	products: IProduct[]
	typeCare: string
}

export const useFilterByCareType = ({
	products,
	typeCare,
}: IUseFilterByCareType) => {
	return useMemo(() => {
		if (!typeCare) {
			return products
		}
		return products.filter(product => product.typeCare.includes(typeCare))
	}, [typeCare])
}
