import { Button } from '@/ui'
import { Undo } from 'lucide-react'
import { HexColorInput, HexColorPicker } from 'react-colorful'

interface ColorPickerProps {
	color: string
	onChange: (newColor: string) => void
	onClick: () => void
}

export const ColorPicker = ({ color, onChange, onClick }: ColorPickerProps) => {
	return (
		<div className="gap-1">
			<div className="flex flex-col gap-2">
				<HexColorPicker color={color} onChange={onChange} />
				<HexColorInput color={color} onChange={onChange} className="border border-zinc-200" />
			</div>
			<div>
				<Button variant="ghost" size="sm" onClick={onClick}>
					<Undo size={16} />
				</Button>
			</div>
		</div>
	)
}
