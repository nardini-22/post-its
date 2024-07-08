import { TextEditor } from '@/ui'
import { type Props, Rnd } from 'react-rnd'

export interface CardProps extends Props {
	content: string
}

export const Card = (props: CardProps) => {
	return (
		<Rnd {...props}>
			<div className="drag-handle w-full h-8 cursor-move bg-inherit brightness-90" />
			<TextEditor id={props.id} content={props.content} />
		</Rnd>
	)
}
