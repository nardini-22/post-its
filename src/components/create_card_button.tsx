import { useLocalStorage } from '@/hooks'
import { Plus } from 'lucide-react'
import { Rnd } from 'react-rnd'
import { Button } from './ui'

type CardPropertiesProps = {
	id: number
	title: string
	description: string
	color: string
	lastPosition: LastPositionProps
}

type LastPositionProps = {
	x: number
	y: number
}

type HandleEditCardProps = {
	id: number
	x: number
	y: number
}

const CreateCardButton = () => {
	const [cardsProperties, setCardsProperties] = useLocalStorage<CardPropertiesProps[]>('cardProperties', [])

	const emptyCard = {
		id: cardsProperties.length + 1,
		title: '',
		description: '',
		color: '',
		lastPosition: { x: 0, y: 0 },
	}

	const handleCreateCard = () => {
		setCardsProperties([...cardsProperties, emptyCard])
	}
	const handleEditCard = ({ id, x, y }: HandleEditCardProps) => {
		setCardsProperties(
			cardsProperties.map((cardProperties) =>
				cardProperties.id === id ? { ...cardProperties, lastPosition: { x, y } } : cardProperties,
			),
		)
	}

	return (
		<>
			<Button variant="outline" onClick={() => handleCreateCard()}>
				<Plus />
			</Button>

			{cardsProperties.map((cardProperties) => {
				return (
					<Rnd
						className="bg-red-500"
						id={cardProperties.id}
						key={cardProperties.id}
						bounds="window"
						default={{
							width: 'auto',
							height: 'auto',
							x: cardProperties.lastPosition.x,
							y: cardProperties.lastPosition.y,
						}}
						onDragStop={(_, d) => handleEditCard({ id: Number(d.node.id), x: d.lastX, y: d.lastY })}
					>
						teste
					</Rnd>
				)
			})}
		</>
	)
}

export default CreateCardButton
