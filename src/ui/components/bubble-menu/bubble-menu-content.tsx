import { BubbleMenuButton, BubbleMenuLink, BubbleMenuLists, BubbleMenuMoreOptions, Input } from '@/ui'
import { BubbleMenu, type Editor } from '@tiptap/react'
import {
	Bold,
	Code,
	CodeXml,
	EllipsisVertical,
	Highlighter,
	Italic,
	Link,
	Palette,
	Strikethrough,
	Underline,
	Undo,
} from 'lucide-react'

export interface BubbleMenuContentProps {
	editor: Editor | null
}

export const BubbleMenuContent = ({ editor }: BubbleMenuContentProps) => {
	return (
		editor && (
			<BubbleMenu editor={editor} tippyOptions={{ duration: 100 }}>
				<div className="bg-white border border-solid border-gray-200 rounded-xl flex p-1 gap-1">
					<BubbleMenuButton content={<Bold size={16} />} popover={<BubbleMenuLists editor={editor} />} />
					<BubbleMenuButton
						onClick={() => editor.chain().focus().toggleBold().run()}
						className={editor.isActive('bold') ? 'is-active' : ''}
						content={<Bold size={16} />}
					/>
					<BubbleMenuButton
						onClick={() => editor.chain().focus().toggleItalic().run()}
						className={editor.isActive('italic') ? 'is-active' : ''}
						content={<Italic size={16} />}
					/>
					<BubbleMenuButton
						onClick={() => editor.chain().focus().toggleUnderline().run()}
						className={editor.isActive('underline') ? 'is-active' : ''}
						content={<Underline size={16} />}
					/>
					<BubbleMenuButton
						onClick={() => editor.chain().focus().toggleStrike().run()}
						className={editor.isActive('strike') ? 'is-active' : ''}
						content={<Strikethrough size={16} />}
					/>
					<BubbleMenuButton
						onClick={() => editor.chain().focus().toggleCode().run()}
						className={editor.isActive('code') ? 'is-active' : ''}
						content={<Code size={16} />}
					/>
					<BubbleMenuButton
						onClick={() => editor.chain().focus().toggleCodeBlock().run()}
						className={editor.isActive('codeBlock') ? 'is-active' : ''}
						content={<CodeXml size={16} />}
					/>
					<BubbleMenuButton
						className={editor.isActive('link') ? 'is-active' : ''}
						content={<Link size={16} />}
						popover={<BubbleMenuLink editor={editor} />}
					/>
					<BubbleMenuButton
						className={`relative ${editor.isActive('highlight') ? 'is-active' : ''}`}
						content={
							<>
								<Highlighter size={16} />
								<Input
									type="color"
									className="opacity-0 absolute"
									onChange={(event) => editor.chain().focus().toggleHighlight({ color: event.target.value }).run()}
									value={editor.getAttributes('textStyle').color}
								/>
							</>
						}
					/>
					<BubbleMenuButton
						className={`relative ${editor.isActive('textStyle') ? 'is-active' : ''}`}
						content={
							<>
								<Palette size={16} />
								<Input
									type="color"
									className="opacity-0 absolute"
									onChange={(event) => editor.chain().focus().setColor(event.target.value).run()}
									value={editor.getAttributes('textStyle').color}
								/>
							</>
						}
					/>
					<BubbleMenuButton
						popover={<BubbleMenuMoreOptions editor={editor} />}
						content={<EllipsisVertical size={16} />}
					/>
					<BubbleMenuButton onClick={() => editor.chain().focus().unsetAllMarks().run()} content={<Undo size={16} />} />
				</div>
			</BubbleMenu>
		)
	)
}
