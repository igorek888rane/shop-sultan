import { ChangeEvent, FC, useState } from 'react'
import styles from './AdminPanel.module.scss'
import { useFormik } from 'formik'
import { IProduct } from '../../data/dataTypes'
import InputPrice from '../UI/InputPrice/InputPrice'
import Select from '../UI/Select/Select'
import { useAppDispatch, useAppSelector } from '../../hooks/useApp'
import Button from '../UI/Button/Button'
import { addItem } from '../../store/slice/adminSlice'

interface IFormikValues {
	imgSmall: string
	imgLarge: string
	name: string
	size: string
	manufacturer: string
	brand: string
	description: string
	price: string
}

const AdminPanelForm: FC = () => {
	const [typeSize, setTypeSize] = useState('volume')
	const { typesCare } = useAppSelector(state => state.filter)
	const [typesCareActive, setTypesCareActive] = useState<string[]>([])
	const dispatch = useAppDispatch()
	const handleChangeCheckbox = (
		e: ChangeEvent<HTMLInputElement>,
		name: string
	) => {
		if (e.target.checked) {
			return setTypesCareActive([...typesCareActive, name])
		}
		setTypesCareActive([...typesCareActive].filter(el => el !== name))
	}
	const { values, handleChange, handleSubmit } = useFormik<IFormikValues>({
		initialValues: {
			imgSmall: '',
			imgLarge: '',
			name: '',
			size: '',
			manufacturer: '',
			brand: '',
			description: '',
			price: '',
		},
		onSubmit: values => {
			const product: IProduct = {
				imageUrl: {
					small: values.imgSmall,
					large: values.imgLarge,
				},
				name: values.name,
				typeSize: typeSize,
				size: values.size,
				brand: values.brand,
				manufacturer: values.manufacturer,
				description: values.description,
				price: +values.price,
				barcode: String(Date.now()),
				typeCare: typesCareActive,
			}
			console.log(product)
			Object.keys(values).forEach(el => {
				values[el as keyof IFormikValues] = ''
			})
			setTypesCareActive([])
			setTypeSize('volume')
			dispatch(addItem(product))
		},
	})
	return (
		<form className={styles.admin__form}>
			<InputPrice
				id={'imgSmall'}
				value={values.imgSmall}
				onChange={handleChange}
				type={'text'}
				placeholder={'Url маленькой картинки '}
			/>
			<InputPrice
				id={'imgLarge'}
				value={values.imgLarge}
				onChange={handleChange}
				type={'text'}
				placeholder={'Url большой картинки '}
			/>
			<InputPrice
				id={'name'}
				value={values.name}
				onChange={handleChange}
				type={'text'}
				placeholder={'Имя товара'}
			/>
			<Select
				item={[
					{ id: 'volume', name: 'Объем' },
					{ id: 'weight', name: 'Вес' },
				]}
				value={typeSize}
				onChange={(e: ChangeEvent<HTMLSelectElement>) =>
					setTypeSize(e.target.value)
				}
			/>
			<InputPrice
				id={'size'}
				value={values.size}
				onChange={handleChange}
				type={'text'}
				placeholder={
					typeSize === 'volume' ? 'Объем товара в мл ' : 'Вес товара в граммах'
				}
			/>
			<InputPrice
				id={'brand'}
				value={values.brand}
				onChange={handleChange}
				type={'text'}
				placeholder={'Имя бренда'}
			/>
			<InputPrice
				id={'manufacturer'}
				value={values.manufacturer}
				onChange={handleChange}
				type={'text'}
				placeholder={'Имя производителя '}
			/>
			<InputPrice
				id={'description'}
				value={values.description}
				onChange={handleChange}
				type={'text'}
				placeholder={'Описание товара'}
			/>
			<InputPrice
				id={'price'}
				value={values.price}
				onChange={handleChange}
				type={'text'}
				placeholder={'Цена'}
			/>
			<div className={styles.form__checkBox}>
				{typesCare.map(el => (
					<span key={el.name}>
						<input
							type={'checkbox'}
							checked={typesCareActive.includes(el.name)}
							onChange={(e: ChangeEvent<HTMLInputElement>) =>
								handleChangeCheckbox(e, el.name)
							}
						/>{' '}
						{el.name}
					</span>
				))}
			</div>
			<Button type={'submit'} onClick={handleSubmit}>
				Добавить
			</Button>
		</form>
	)
}

export default AdminPanelForm
