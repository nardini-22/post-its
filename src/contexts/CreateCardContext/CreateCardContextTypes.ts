import type { Dispatch, SetStateAction } from 'react'

export type CardPropertiesProps = {
	id: number
	title: string
	description: string
	color: string
	lastPosition: { x: number; y: number }
	lastSize: { height: number; width: number }
	textEditorHeight: number
}

export type TextEditorPropertiesProps = {
	id: number
	height: number
}

export type CreateCardContextTypes = {
	cardsProperties: CardPropertiesProps[]
	setCardsProperties: Dispatch<SetStateAction<CreateCardContextTypes['cardsProperties']>>
	handleCreateEmptyCard: () => void
	handleEditCardProperties: (id: number, changeObject: object) => void
	textEditorProperties: TextEditorPropertiesProps
	textEditorRef: (node: HTMLElement | null) => void
}
