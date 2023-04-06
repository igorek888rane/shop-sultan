import Page from './page'

class CatalogPage extends Page {
	public get typeCareItem() {
		return $('#typeCare-item')
	}
	public get checkBox() {
		return $('#checkbox')
	}
	public get buttonShow() {
		return $('#show')
	}
	public get productCards() {
		return $$('#productCard').length
	}

	async clickItem() {
		await this.typeCareItem.click()
	}
	async clickCheckBox() {
		await this.checkBox.click()
	}
	async clickButton() {
		await this.buttonShow.click()
	}

	async compareTypeCare() {
		await this.open()
		const productCardsCount = await this.productCards
		await this.clickItem()
		const productCardsCountAfterClick = await this.productCards
		if (productCardsCount === productCardsCountAfterClick) {
			throw new Error('Фильтрация не произошла')
		}
	}
	async compareFilterCheckBox() {
		await this.open()
		const productCardsCount = await this.productCards
		await this.clickCheckBox()
		await this.clickButton()
		const productCardsCountAfterClick = await this.productCards
		if (productCardsCount === productCardsCountAfterClick) {
			throw new Error('Фильтрация не произошла')
		}
	}
	public open() {
		return super.open('')
	}
}

export default new CatalogPage()
