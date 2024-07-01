import { TextEditor } from '@/ui'
import { Rnd, type Props } from 'react-rnd'

export interface CardProps extends Props {
	content: string
}

export const Card = (props: CardProps) => {
	return (
		<Rnd {...props}>
			<TextEditor id={props.id} content={props.content} />
		</Rnd>
	)
}
