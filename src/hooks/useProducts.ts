import { IProduct } from '../data/dataTypes'
import { useMemo } from 'react'
import { quickSort } from '../utils/quickSort'

interface IUseSortByProducts {
	products: IProduct[]
	sortName: string
	sortBy: string
}

interface IUseProducts extends IUseSortByProducts {
	typeCare: string
}

export const useSortByProducts = ({
	products,
	sortName,
	sortBy,
}: IUseSortByProducts) => {
	return useMemo(() => {
		if (sortBy === 'asc') {
			return quickSort(products, sortName)
		} else {
			return quickSort(products, sortName).reverse()
		}
	}, [products, sortBy, sortName])
}
export const useProducts = ({
	products,
	typeCare,
	sortName,
	sortBy,
}: IUseProducts) => {
	const sortedPosts = useSortByProducts({ products, sortName, sortBy })
	return useMemo(() => {
		if (!typeCare) {
			return sortedPosts
		}
		return sortedPosts.filter(product => product.typeCare.includes(typeCare))
	}, [sortedPosts, typeCare])
}
