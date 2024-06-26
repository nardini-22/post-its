import { useCreateCardContext } from '@/contexts'
import { Button, Card } from '@/ui'
import { Plus } from 'lucide-react'

export const CreateCardButton = () => {
	const { cardsProperties, handleCreateEmptyCard, handleEditCardProperties, disableDragging } = useCreateCardContext()

	return (
		<>
			<Button variant="outline" onClick={() => handleCreateEmptyCard()}>
				<Plus />
			</Button>

			{cardsProperties.map((cardProperties) => {
				return (
					<Card
						className="bg-red-500"
						id={cardProperties.id}
						key={cardProperties.id}
						bounds="window"
						default={{
							height: cardProperties.lastSize.height || 'auto',
							width: cardProperties.lastSize.width || 'auto',
							x: cardProperties.lastPosition.x || 100,
							y: cardProperties.lastPosition.y || 100,
						}}
						minHeight={cardProperties.textEditorHeight}
						minWidth={200}
						content={cardProperties.content}
						enableUserSelectHack={false}
						disableDragging={disableDragging}
						onDragStop={(_, d) =>
							handleEditCardProperties(Number(d.node.id), { lastPosition: { x: d.lastX, y: d.lastY } })
						}
						onResizeStop={(_, __, ref, ___, position) =>
							handleEditCardProperties(Number(ref.id), {
								lastPosition: { x: position.x, y: position.y },
								lastSize: { height: ref.offsetHeight, width: ref.offsetWidth },
							})
						}
					/>
				)
			})}
		</>
	)
}
