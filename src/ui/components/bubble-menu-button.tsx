import { Button } from '@/ui'
import type { ReactNode } from 'react'

interface BubbleMenuButtonProps {
	onClick?: () => void
	className?: string
	icon: ReactNode
}

export const BubbleMenuButton = ({ onClick, className, icon }: BubbleMenuButtonProps) => (
	<Button size="sm" variant="ghost" onClick={onClick} className={className}>
		{icon}
	</Button>
)
