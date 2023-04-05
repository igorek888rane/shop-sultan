import { MemoryRouter } from 'react-router-dom'
import Main from '../../components/Main/Main'
import { FC, PropsWithChildren } from 'react'

export const RenderWithRouter: FC<
	PropsWithChildren<{ initialRoute?: string }>
> = ({ initialRoute = '/', children }) => {
	return (
		<MemoryRouter initialEntries={[initialRoute]}>
			<Main />
			{children}
		</MemoryRouter>
	)
}
