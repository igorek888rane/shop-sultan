import { returnCondition } from '../../utils/returnCondition'
import { productTest } from '../mock'

describe('calcValue', () => {
	test('All condition true', () => {
		expect(
			returnCondition({
				el: productTest,
				from: '0',
				to: '450',
				brandActive: ['Gillеttе'],
				manufacturerActive: ['Procter&Gamble'],
			})
		).toBe(true)
	})
	test('All condition false', () => {
		expect(
			returnCondition({
				el: productTest,
				from: '0',
				to: '450',
				brandActive: [''],
				manufacturerActive: [''],
			})
		).toBe(false)
	})
	test('Condition only brand false', () => {
		expect(
			returnCondition({
				el: productTest,
				from: '0',
				to: '450',
				brandActive: [''],
				manufacturerActive: [],
			})
		).toBe(false)
	})
	test('Condition only brand true', () => {
		expect(
			returnCondition({
				el: productTest,
				from: '0',
				to: '450',
				brandActive: ['Gillеttе'],
				manufacturerActive: [],
			})
		).toBe(true)
	})
	test('Condition only manufacture false', () => {
		expect(
			returnCondition({
				el: productTest,
				from: '0',
				to: '450',
				brandActive: [],
				manufacturerActive: [''],
			})
		).toBe(false)
	})
	test('Condition only manufacture true', () => {
		expect(
			returnCondition({
				el: productTest,
				from: '0',
				to: '450',
				brandActive: [],
				manufacturerActive: ['Procter&Gamble'],
			})
		).toBe(true)
	})
})
