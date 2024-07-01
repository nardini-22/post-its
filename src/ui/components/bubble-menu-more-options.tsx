import { BubbleMenuButton } from '@/ui'
import type { Editor } from '@tiptap/react'
import { AlignCenter, AlignJustify, AlignLeft, AlignRight, Subscript, Superscript } from 'lucide-react'

interface BubbleMenuMoreOptionsProps {
	editor: Editor
}

export const BubbleMenuMoreOptions = ({ editor }: BubbleMenuMoreOptionsProps) => {
	return (
		<div className="flex gap-1 p-1">
			<BubbleMenuButton
				onClick={() => editor.chain().focus().toggleSubscript().run()}
				className={editor.isActive('subscript') ? 'is-active' : ''}
				icon={<Subscript size={16} />}
			/>
			<BubbleMenuButton
				onClick={() => editor.chain().focus().toggleSuperscript().run()}
				className={editor.isActive('superscript') ? 'is-active' : ''}
				icon={<Superscript size={16} />}
			/>
			<BubbleMenuButton
				onClick={() => editor.chain().focus().setTextAlign('left').run()}
				className={editor.isActive({ textAlign: 'left' }) ? 'is-active' : ''}
				icon={<AlignLeft size={16} />}
			/>
			<BubbleMenuButton
				onClick={() => editor.chain().focus().setTextAlign('center').run()}
				className={editor.isActive({ textAlign: 'center' }) ? 'is-active' : ''}
				icon={<AlignCenter size={16} />}
			/>
			<BubbleMenuButton
				onClick={() => editor.chain().focus().setTextAlign('right').run()}
				className={editor.isActive({ textAlign: 'right' }) ? 'is-active' : ''}
				icon={<AlignRight size={16} />}
			/>
			<BubbleMenuButton
				onClick={() => editor.chain().focus().setTextAlign('justify').run()}
				className={editor.isActive({ textAlign: 'justify' }) ? 'is-active' : ''}
				icon={<AlignJustify size={16} />}
			/>
		</div>
	)
}
