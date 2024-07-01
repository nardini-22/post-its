import { Button, Popover, PopoverContent, PopoverTrigger } from '@/ui'
import type { ReactNode } from 'react'

interface BubbleMenuButtonProps {
	onClick?: () => void
	className?: string
	content: ReactNode
	popover?: ReactNode
}

export const BubbleMenuButton = ({ onClick, className, content, popover }: BubbleMenuButtonProps) => (
	<Popover>
		<PopoverTrigger asChild>
			<Button size="sm" variant="ghost" onClick={onClick} className={className}>
				{content}
			</Button>
		</PopoverTrigger>
		{popover && <PopoverContent className="w-fit">{popover}</PopoverContent>}
	</Popover>
)
