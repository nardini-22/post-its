import { useCreateCardContext } from '@/contexts'
import { Button, Card } from '@/ui'
import { Plus } from 'lucide-react'

export const CreateCardButton = () => {
	const { cardsProperties, handleCreateEmptyCard, handleEditCardProperties, selectedColor, setSelectedColor } =
		useCreateCardContext()

	const colorsArray = [
		'bg-primary-blue',
		'bg-primary-pink',
		'bg-primary-green',
		'bg-primary-yellow',
		'bg-primary-orange',
	]

	return (
		<>
			<div className="m-2 flex flex-col w-fit gap-2 p-2 ring-1 ring-black shadow-sm rounded">
				<Button variant="ghost" onClick={() => handleCreateEmptyCard()}>
					<Plus />
				</Button>
				<div className="grid grid-cols-2 grid-rows-3 gap-2">
					{colorsArray.map((color) => {
						return (
							<Button
								key={color}
								className={`${color === selectedColor && 'ring-black ring-2'} ${color} hover:${color} w-10 h-10`}
								onClick={() => setSelectedColor(color)}
							/>
						)
					})}
				</div>
			</div>

			{cardsProperties.map((cardProperties) => {
				return (
					<Card
						className={cardProperties.color}
						color={cardProperties.color}
						id={cardProperties.id}
						key={cardProperties.id}
						bounds="window"
						default={{
							height: cardProperties.lastSize.height || 'auto',
							width: cardProperties.lastSize.width || 'auto',
							x: cardProperties.lastPosition.x || 200,
							y: cardProperties.lastPosition.y || 100,
						}}
						minHeight={cardProperties.textEditorHeight + 32}
						minWidth={200}
						content={cardProperties.content}
						enableUserSelectHack={false}
						onDragStop={(_, d) =>
							handleEditCardProperties(Number(d.node.id), { lastPosition: { x: d.lastX, y: d.lastY } })
						}
						onResizeStop={(_, __, ref, ___, position) =>
							handleEditCardProperties(Number(ref.id), {
								lastPosition: { x: position.x, y: position.y },
								lastSize: { height: ref.offsetHeight, width: ref.offsetWidth },
							})
						}
						dragHandleClassName="drag-handle"
					/>
				)
			})}
		</>
	)
}
