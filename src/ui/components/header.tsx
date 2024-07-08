import { useCreateCardContext } from '@/contexts'
import { Trash2 } from 'lucide-react'
import { Button } from './ui/button'

export const Header = () => {
	const { handleDeleteAllCards } = useCreateCardContext()
	return (
		<div>
			<Button onClick={() => handleDeleteAllCards()} variant="ghost">
				<Trash2 size={16} />
				clear notes
			</Button>
		</div>
	)
}
