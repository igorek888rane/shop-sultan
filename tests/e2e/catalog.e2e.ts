import CatalogPage from '../pages/catalog.page'

describe('Catalog', () => {
	it('checkbox filter check', async () => {
		await CatalogPage.compareFilterCheckBox()
	})
	it('filter check by care type', async () => {
		await CatalogPage.compareTypeCare()
	})
})
