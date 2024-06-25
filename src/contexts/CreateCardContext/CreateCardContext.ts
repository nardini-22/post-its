import { createContext, useContext } from 'react'
import type { CardPropertiesProps, CreateCardContextTypes } from './CreateCardContextTypes'

export const initialState = {
	cardsProperties: Array<CardPropertiesProps>(),
} as CreateCardContextTypes

export const CreateCardContext = createContext(initialState)

export const useCreateCardContext = () => useContext(CreateCardContext)
