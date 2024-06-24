import { useLocalStorage } from '@/hooks'
import { Plus } from 'lucide-react'
import { Rnd } from 'react-rnd'
import { Button } from './ui'

type LastPositionProps = {
	x: number
	y: number
}

type CardPropertiesProps = {
	id: number
	title: string
	description: string
	color: string
	lastPosition: LastPositionProps
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
	return (
		<>
			<Button variant="outline" onClick={() => handleCreateCard()}>
				<Plus />
			</Button>

			{cardsProperties.map((cardProperties) => {
				console.log(cardProperties.id)
				return (
					<Rnd
						className="bg-red-500"
						id={cardProperties.id}
						key={cardProperties.id}
						default={{ width: 'auto', height: 'auto', x: 100, y: 100 }}
						// onDragStop={(_, d) => console.log(d)}
						// onDragStart={(_, d) => console.log(d.node.id)}
					>
						teste
					</Rnd>
				)
			})}
		</>
	)
}

export default CreateCardButton
