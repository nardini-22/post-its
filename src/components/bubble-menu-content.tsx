import { Button } from '@/components'
import { BubbleMenu, type Editor } from '@tiptap/react'
import { Bold, Code, CodeXml, Highlighter, Italic, Link, Palette, Strikethrough, Underline } from 'lucide-react'

interface BubbleMenuContentProps {
	editor: Editor | null
}

export const BubbleMenuContent = ({ editor }: BubbleMenuContentProps) => {
	return (
		editor && (
			<BubbleMenu editor={editor} tippyOptions={{ duration: 100 }}>
				<div className="bg-white border border-solid border-gray-200 rounded-xl flex p-1">
					<Button
						size="sm"
						variant="ghost"
						onClick={() => editor.chain().focus().toggleBold().run()}
						className={editor.isActive('bold') ? 'is-active' : ''}
					>
						<Bold size={16} />
					</Button>
					<Button
						size="sm"
						variant="ghost"
						onClick={() => editor.chain().focus().toggleItalic().run()}
						className={editor.isActive('italic') ? 'is-active' : ''}
					>
						<Italic size={16} />
					</Button>
					<Button
						size="sm"
						variant="ghost"
						onClick={() => editor.chain().focus().toggleUnderline().run()}
						className={editor.isActive('underline') ? 'is-active' : ''}
					>
						<Underline size={16} />
					</Button>
					<Button
						size="sm"
						variant="ghost"
						onClick={() => editor.chain().focus().toggleStrike().run()}
						className={editor.isActive('line-through') ? 'is-active' : ''}
					>
						<Strikethrough size={16} />
					</Button>
					<Button
						size="sm"
						variant="ghost"
						onClick={() => editor.chain().focus().toggleCode().run()}
						className={editor.isActive('code') ? 'is-active' : ''}
					>
						<Code size={16} />
					</Button>
					<Button
						size="sm"
						variant="ghost"
						onClick={() => editor.chain().focus().toggleCodeBlock().run()}
						className={editor.isActive('codeBlock') ? 'is-active' : ''}
					>
						<CodeXml size={16} />
					</Button>
					<Button size="sm" variant="ghost">
						{/* fazer a função do link */}
						<Link size={16} />
					</Button>
					<Button size="sm" variant="ghost">
						{/* fazer a função de destacar */}
						<Highlighter size={16} />
					</Button>
					<Button size="sm" variant="ghost">
						{/* fazer a função de destacar */}
						<Palette size={16} />
					</Button>
				</div>
			</BubbleMenu>
		)
	)
}
