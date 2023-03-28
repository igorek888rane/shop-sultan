import { useEffect, useState } from 'react'

export const useResize = () => {
	const [width, setWidth] = useState(window.innerWidth)
	useEffect(() => {
		const handleResize = (e: Event) => {
			const target = e.target as Window
			setWidth(target.innerWidth)
		}
		window.addEventListener('resize', handleResize)
		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [])

	return width < 788
}
