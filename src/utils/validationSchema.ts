import * as yup from 'yup'

export const validationSchema = yup.object().shape({
	name: yup.string().required('Обязательное поле'),
	imgSmall: yup.string().required('Обязательное поле'),
	imgLarge: yup.string().required('Обязательное поле'),
	size: yup
		.number()
		.typeError('Должно быть число')
		.min(1, 'Не может быть меньше 1 ')
		.required('Обязательное поле'),
	manufacturer: yup.string().required('Обязательное поле'),
	brand: yup.string().required('Обязательное поле'),
	description: yup.string().required('Обязательное поле'),
	price: yup
		.number()
		.typeError('Должно быть число')
		.min(1, 'Не может быть меньше 1 ')
		.required('Обязательное поле'),
})
