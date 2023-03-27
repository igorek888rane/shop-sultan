import { IProduct } from '../data/dataTypes'
import { useMemo } from 'react'
import { quickSort } from '../utils/quickSort'
import { itemType } from '../store/slice/filterSlice'

interface IUseSortByProducts {
	products: IProduct[]
	sortName: string
	sortBy: string
}

interface IUseProducts extends IUseSortByProducts {
	typesCare: itemType[]
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
	typesCare,
	sortName,
	sortBy,
}: IUseProducts) => {
	const sortedPosts = useSortByProducts({ products, sortName, sortBy })
	const activeTypesCare = typesCare.filter(el => el.active).map(el => el.name)

	return useMemo(() => {
		if (!activeTypesCare.length) {
			return sortedPosts
		}
		return sortedPosts
			.map(product => {
				for (let i = 0; i < product.typeCare.length; i++) {
					for (let j = 0; j < activeTypesCare.length; j++) {
						if (product.typeCare[i] == activeTypesCare[j]) {
							return product
						}
					}
				}
			})
			.filter(el => el)
	}, [sortedPosts, typesCare])
}
