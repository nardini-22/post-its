import { useLocalStorage } from '@/hooks'
import { useCallback, useEffect, useState, type PropsWithChildren } from 'react'
import { CreateCardContext } from './CreateCardContext'
import type { CardPropertiesProps, TextEditorPropertiesProps } from './CreateCardContextTypes'

export const CreateCardContextProvider = ({ children }: PropsWithChildren) => {
	const [cardsProperties, setCardsProperties] = useLocalStorage<CardPropertiesProps[]>('cardProperties', [])
	const [textEditorProperties, setTextEditorProperties] = useState<TextEditorPropertiesProps>({
		id: 0,
		height: 0,
	})
	const [disableDragging, setDisableDragging] = useState<boolean>(false)

	const textEditorRef = useCallback((node: HTMLElement | null) => {
		if (!node) return
		const resizeObserver = new ResizeObserver(() => {
			setTextEditorProperties({ id: Number(node.id), height: node.offsetHeight })
		})
		resizeObserver.observe(node)
	}, [])

	useEffect(() => {
		handleEditCardProperties(textEditorProperties.id, { textEditorHeight: textEditorProperties.height })
	}, [textEditorProperties])

	const emptyCard = {
		id: cardsProperties.length + 1,
		content: '',
		color: '',
		lastPosition: { x: 0, y: 0 },
		lastSize: { height: 0, width: 0 },
		textEditorHeight: 0,
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
				textEditorProperties,
				textEditorRef,
				disableDragging,
				setDisableDragging,
			}}
		>
			{children}
		</CreateCardContext.Provider>
	)
}
