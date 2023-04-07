import sortSlice, {setSortBy, setSortName} from "../../store/slice/sortSlice";

describe('sortSlice', () => {
	test('setSortName', () => {
		expect(sortSlice({ sortName:'name',sortBy:'desc'}, setSortName('price'))).toEqual({
			sortName:'price',sortBy:'desc'
		})
	})
	test('changeCart plus product', () => {
		expect(
			sortSlice({ sortName:'name',sortBy:'desc'}, setSortBy('asc'))
		).toEqual({
			sortName:'name',sortBy:'asc'
		})
	})


})
