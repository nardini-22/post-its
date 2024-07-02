import { useCreateCardContext } from '@/contexts'
import { Helmet } from 'react-helmet-async'

export const Head = () => {
	const { cardsProperties } = useCreateCardContext()

	const titlePrefix = cardsProperties.length ? `${cardsProperties.length}` : ''
	const title = `(${titlePrefix}) Note-it`

	return (
		<Helmet>
			<title>{title}</title>
		</Helmet>
	)
}
