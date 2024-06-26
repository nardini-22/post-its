import { useLocalStorage } from '@/hooks'
import type { PropsWithChildren } from 'react'
import { CreateCardContext } from './CreateCardContext'
import type { CardPropertiesProps } from './CreateCardContextTypes'

export const CreateCardContextProvider = ({ children }: PropsWithChildren) => {
	const [cardsProperties, setCardsProperties] = useLocalStorage<CardPropertiesProps[]>('cardProperties', [])

	const emptyCard = {
		id: cardsProperties.length + 1,
		title: '',
		description: '',
		color: '',
		lastPosition: { x: 0, y: 0 },
		lastSize: { height: 0, width: 0 },
	}

	const handleCreateEmptyCard = () => {
		setCardsProperties([...cardsProperties, emptyCard])
	}

	const handleEditCardProperties = (id: number, changeObject: object) => {
		setCardsProperties(
			cardsProperties.map((cardProperties) =>
				cardProperties.id === id ? { ...cardProperties, ...changeObject } : cardProperties,
			),
		)
	}

	return (
		<CreateCardContext.Provider
			value={{
				cardsProperties,
				setCardsProperties,
				handleCreateEmptyCard,
				handleEditCardProperties,
			}}
		>
			{children}
		</CreateCardContext.Provider>
	)
}
