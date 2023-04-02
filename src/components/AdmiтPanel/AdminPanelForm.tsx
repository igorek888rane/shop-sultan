import { ChangeEvent, FC, useState } from 'react'
import styles from './AdminPanel.module.scss'
import { useFormik } from 'formik'
import { IProduct } from '../../data/dataTypes'
import InputPrice from '../UI/InputPrice/InputPrice'
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
	const { values, handleChange, handleSubmit, errors, isValid } =
		useFormik<IFormikValues>({
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
				<div className={styles.form__error}>
					{errors.imgSmall && errors.imgSmall}
				</div>
				<InputPrice
					id={'imgSmall'}
					value={values.imgSmall}
					onChange={handleChange}
					type={'text'}
					placeholder={'Url маленькой картинки '}
				/>
			</div>
			<div className={styles.form__input}>
				<div className={styles.form__error}>
					{errors.imgLarge && errors.imgLarge}
				</div>
				<InputPrice
					id={'imgLarge'}
					value={values.imgLarge}
					onChange={handleChange}
					type={'text'}
					placeholder={'Url большой картинки '}
				/>
			</div>
			<div className={styles.form__input}>
				<div className={styles.form__error}>{errors.name && errors.name}</div>
				<InputPrice
					id={'name'}
					value={values.name}
					onChange={handleChange}
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
				<div className={styles.form__error}>{errors.size && errors.size}</div>
				<InputPrice
					id={'size'}
					value={values.size}
					onChange={handleChange}
					type={'text'}
					placeholder={
						typeSize === 'volume'
							? 'Объем товара в мл '
							: 'Вес товара в граммах'
					}
				/>
			</div>
			<div className={styles.form__input}>
				<div className={styles.form__error}>{errors.brand && errors.brand}</div>
				<InputPrice
					id={'brand'}
					value={values.brand}
					onChange={handleChange}
					type={'text'}
					placeholder={'Имя бренда'}
				/>
			</div>
			<div className={styles.form__input}>
				<div className={styles.form__error}>
					{errors.manufacturer && errors.manufacturer}
				</div>
				<InputPrice
					id={'manufacturer'}
					value={values.manufacturer}
					onChange={handleChange}
					type={'text'}
					placeholder={'Имя производителя '}
				/>
			</div>
			<div className={styles.form__input}>
				<div className={styles.form__error}>
					{errors.description && errors.description}
				</div>
				<InputPrice
					id={'description'}
					value={values.description}
					onChange={handleChange}
					type={'text'}
					placeholder={'Описание товара'}
				/>
			</div>
			<div className={styles.form__input}>
				<div className={styles.form__error}>{errors.price && errors.price}</div>
				<InputPrice
					id={'price'}
					value={values.price}
					onChange={handleChange}
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
