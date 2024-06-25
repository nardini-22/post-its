import type { Dispatch, SetStateAction } from 'react'

export type CardPropertiesProps = {
	id: number
	title: string
	description: string
	color: string
	lastPosition: LastPositionProps
}

export type LastPositionProps = {
	x: number
	y: number
}

export type CreateCardContextTypes = {
	cardsProperties: CardPropertiesProps[]
	setCardsProperties: Dispatch<SetStateAction<CreateCardContextTypes['cardsProperties']>>
	handleCreateEmptyCard: () => void
	handleEditCardProperties: (id: number, changeObject: object) => void
}
