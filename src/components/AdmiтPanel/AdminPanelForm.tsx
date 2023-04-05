import { ChangeEvent, FC, useState } from 'react'
import styles from './AdminPanel.module.scss'
import { useFormik } from 'formik'
import { IProduct } from '../../data/dataTypes'
import Input from '../UI/Input/Input'
import Select from '../UI/Select/Select'
import { useAppDispatch, useAppSelector } from '../../hooks/useApp'
import Button from '../UI/Button/Button'
import { addItem, updateItem } from '../../store/slice/adminSlice'
import { validationSchema } from '../../utils/validationSchema'

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

interface AdminPanelFormProps {
	valuesItem: IFormikValues
	typeSizeItem: string
	typesCareActiveItem: string[]
	barcode?: string
}

const AdminPanelForm: FC<AdminPanelFormProps> = ({
	valuesItem,
	typeSizeItem,
	typesCareActiveItem,
	barcode,
}) => {
	const [typeSize, setTypeSize] = useState(typeSizeItem)
	const { typesCare } = useAppSelector(state => state.filter)
	const [typesCareActive, setTypesCareActive] =
		useState<string[]>(typesCareActiveItem)
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
	const {
		values,
		handleChange,
		handleSubmit,
		handleBlur,
		touched,
		errors,
		isValid,
	} = useFormik<IFormikValues>({
		initialValues: valuesItem,
		validationSchema,
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
				barcode: barcode ? barcode : String(Date.now()),
				typeCare: typesCareActive,
			}
			if (barcode) {
				dispatch(updateItem(product))
				return
			}
			setTypesCareActive([])
			setTypeSize('volume')
			dispatch(addItem(product))
			Object.keys(values).forEach(el => {
				values[el as keyof IFormikValues] = ''
			})
		},
	})

	return (
		<form className={styles.admin__form}>
			<div className={styles.form__input}>
				{touched.imgSmall && errors.imgSmall && (
					<div className={styles.form__error}>{errors.imgSmall} </div>
				)}
				<Input
					id={'imgSmall'}
					value={values.imgSmall}
					onChange={handleChange}
					onBlur={handleBlur}
					type={'text'}
					placeholder={'Url маленькой картинки '}
				/>
			</div>
			<div className={styles.form__input}>
				{touched.imgLarge && errors.imgLarge && (
					<div className={styles.form__error}>{errors.imgLarge} </div>
				)}
				<Input
					id={'imgLarge'}
					value={values.imgLarge}
					onChange={handleChange}
					onBlur={handleBlur}
					type={'text'}
					placeholder={'Url большой картинки '}
				/>
			</div>
			<div className={styles.form__input}>
				{touched.name && errors.name && (
					<div className={styles.form__error}>{errors.name} </div>
				)}
				<Input
					id={'name'}
					value={values.name}
					onChange={handleChange}
					onBlur={handleBlur}
					type={'text'}
					placeholder={'Имя товара'}
				/>
			</div>
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
			<div className={styles.form__input}>
				{touched.size && errors.size && (
					<div className={styles.form__error}>{errors.size} </div>
				)}
				<Input
					id={'size'}
					value={values.size}
					onChange={handleChange}
					onBlur={handleBlur}
					type={'text'}
					placeholder={
						typeSize === 'volume'
							? 'Объем товара в мл '
							: 'Вес товара в граммах'
					}
				/>
			</div>
			<div className={styles.form__input}>
				{touched.brand && errors.brand && (
					<div className={styles.form__error}>{errors.brand} </div>
				)}
				<Input
					id={'brand'}
					value={values.brand}
					onChange={handleChange}
					onBlur={handleBlur}
					type={'text'}
					placeholder={'Имя бренда'}
				/>
			</div>
			<div className={styles.form__input}>
				{touched.manufacturer && errors.manufacturer && (
					<div className={styles.form__error}>{errors.manufacturer} </div>
				)}
				<Input
					id={'manufacturer'}
					value={values.manufacturer}
					onChange={handleChange}
					onBlur={handleBlur}
					type={'text'}
					placeholder={'Имя производителя '}
				/>
			</div>
			<div className={styles.form__input}>
				{touched.description && errors.description && (
					<div className={styles.form__error}>{errors.description} </div>
				)}
				<Input
					id={'description'}
					value={values.description}
					onChange={handleChange}
					onBlur={handleBlur}
					type={'text'}
					placeholder={'Описание товара'}
				/>
			</div>
			<div className={styles.form__input}>
				{touched.price && errors.price && (
					<div className={styles.form__error}>{errors.price} </div>
				)}
				<Input
					id={'price'}
					value={values.price}
					onChange={handleChange}
					onBlur={handleBlur}
					type={'text'}
					placeholder={'Цена'}
				/>
			</div>
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
			<Button disabled={!isValid} type={'submit'} onClick={handleSubmit}>
				{barcode ? 'Редактировать' : 'Добавлять'}
			</Button>
		</form>
	)
}

export default AdminPanelForm
