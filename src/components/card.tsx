import { Rnd, type Props } from 'react-rnd'

export interface CardProps extends Props {}

export const Card = (props: CardProps) => {
	return <Rnd {...props}>teste</Rnd>
}
