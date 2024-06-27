import { TextEditor } from '@/components'
import { Rnd, type Props } from 'react-rnd'

export interface CardProps extends Props {}

export const Card = (props: CardProps) => {
	return (
		<Rnd {...props}>
			<TextEditor id={props.id} />
		</Rnd>
	)
}
