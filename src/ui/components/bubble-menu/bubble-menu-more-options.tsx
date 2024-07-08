import { BubbleMenuButton, type BubbleMenuPopoverProps } from '@/ui'
import { AlignCenter, AlignJustify, AlignLeft, AlignRight, Subscript, Superscript } from 'lucide-react'

interface BubbleMenuMoreOptionsProps extends BubbleMenuPopoverProps {}

export const BubbleMenuMoreOptions = ({ editor }: BubbleMenuMoreOptionsProps) => {
	return (
		<div className="flex gap-2">
			<BubbleMenuButton
				onClick={() => editor.chain().focus().toggleSubscript().run()}
				className={editor.isActive('subscript') ? 'is-active' : ''}
				content={<Subscript size={16} />}
			/>
			<BubbleMenuButton
				onClick={() => editor.chain().focus().toggleSuperscript().run()}
				className={editor.isActive('superscript') ? 'is-active' : ''}
				content={<Superscript size={16} />}
			/>
			<BubbleMenuButton
				onClick={() => editor.chain().focus().setTextAlign('left').run()}
				className={editor.isActive({ textAlign: 'left' }) ? 'is-active' : ''}
				content={<AlignLeft size={16} />}
			/>
			<BubbleMenuButton
				onClick={() => editor.chain().focus().setTextAlign('center').run()}
				className={editor.isActive({ textAlign: 'center' }) ? 'is-active' : ''}
				content={<AlignCenter size={16} />}
			/>
			<BubbleMenuButton
				onClick={() => editor.chain().focus().setTextAlign('right').run()}
				className={editor.isActive({ textAlign: 'right' }) ? 'is-active' : ''}
				content={<AlignRight size={16} />}
			/>
			<BubbleMenuButton
				onClick={() => editor.chain().focus().setTextAlign('justify').run()}
				className={editor.isActive({ textAlign: 'justify' }) ? 'is-active' : ''}
				content={<AlignJustify size={16} />}
			/>
		</div>
	)
}
