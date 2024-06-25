import { useEffect, useState } from 'react'

type WindowSizeProps = {
	height: number
	width: number
}

const useViewport = () => {
	const [windowSize, setWindowSize] = useState<WindowSizeProps>({
		height: window.innerHeight,
		width: window.innerWidth,
	})

	useEffect(() => {
		const windowSizeHandler = () => {
			setWindowSize({ height: window.innerWidth, width: window.innerHeight })
		}
		window.addEventListener('resize', windowSizeHandler)

		return () => {
			window.removeEventListener('resize', windowSizeHandler)
		}
	}, [])

	return { height: windowSize.height, width: windowSize.width }
}

export default useViewport
