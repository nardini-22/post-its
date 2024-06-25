import { useCreateCardContext } from '@/contexts'
import { Plus } from 'lucide-react'
import { Rnd } from 'react-rnd'
import { Button } from './ui'

const CreateCardButton = () => {
	const { cardsProperties, handleCreateEmptyCard, handleEditCardProperties } = useCreateCardContext()

	return (
		<>
			<Button variant="outline" onClick={() => handleCreateEmptyCard()}>
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
						onDragStop={(_, d) =>
							handleEditCardProperties(Number(d.node.id), { lastPosition: { x: d.lastX, y: d.lastY } })
						}
					>
						teste
					</Rnd>
				)
			})}
		</>
	)
}

export default CreateCardButton
