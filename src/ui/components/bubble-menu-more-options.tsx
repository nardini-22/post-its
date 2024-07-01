import { BubbleMenuButton } from '@/ui'
import type { Editor } from '@tiptap/react'
import { AlignCenter, AlignJustify, AlignLeft, AlignRight, Subscript, Superscript } from 'lucide-react'

interface BubbleMenuMoreOptionsProps {
	editor: Editor
}

export const BubbleMenuMoreOptions = ({ editor }: BubbleMenuMoreOptionsProps) => {
	return (
		<div className="gap-1 p-1">
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
