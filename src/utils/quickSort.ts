import { IProduct } from '../data/dataTypes'

export const quickSort = (array: IProduct[], sortName: string): IProduct[] => {
	if (array.length <= 1) {
		return array
	}
	let middleIndex = Math.floor(array.length / 2)
	let middleEl: IProduct = array[middleIndex]
	let less: IProduct[] = []
	let greater: IProduct[] = []
	array.forEach((el: IProduct, i: number) => {
		if (i === middleIndex) {
			return
		}
		if (el[sortName as keyof IProduct] < middleEl[sortName as keyof IProduct]) {
			less.push(el)
		} else {
			greater.push(el)
		}
	})
	return [
		...quickSort(less, sortName),
		middleEl,
		...quickSort(greater, sortName),
	]
}
