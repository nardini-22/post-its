import {
	BubbleMenuButton,
	BubbleMenuLink,
	BubbleMenuLists,
	BubbleMenuMoreOptions,
	BubbleMenuSizes,
	ColorPicker,
} from '@/ui'
import { RgbToHex } from '@/utils'
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
} from 'lucide-react'

export interface BubbleMenuContentProps {
	editor: Editor
}

export const BubbleMenuContent = ({ editor }: BubbleMenuContentProps) => {
	const inputColorValue = !editor.getAttributes('textStyle').color
		? '#000000'
		: editor.getAttributes('textStyle').color.includes('rgb')
			? RgbToHex(editor.getAttributes('textStyle').color)
			: editor.getAttributes('textStyle').color
	return (
		<BubbleMenu editor={editor} tippyOptions={{ duration: 100 }}>
			<div className="bg-white border border-solid border-gray-200 rounded-xl flex p-1 gap-2">
				<BubbleMenuButton content={<Bold size={16} />} popover={<BubbleMenuLists editor={editor} />} />
				<BubbleMenuButton content={<Bold size={16} />} popover={<BubbleMenuSizes editor={editor} />} />
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
					content={<Highlighter size={16} />}
					popover={
						<ColorPicker
							color={editor.getAttributes('highlight').color ?? '#000000'}
							onChange={(newColor) => editor.chain().focus().toggleHighlight({ color: newColor }).run()}
							onClick={() => editor.chain().focus().unsetHighlight().run()}
						/>
					}
				/>
				<BubbleMenuButton
					className={`relative ${editor.isActive('textStyle') ? 'is-active' : ''}`}
					content={<Palette size={16} />}
					popover={
						<ColorPicker
							color={inputColorValue}
							onChange={(newColor) => editor.chain().focus().setColor(newColor).run()}
							onClick={() => editor.chain().focus().unsetColor().run()}
						/>
					}
				/>
				<BubbleMenuButton
					popover={<BubbleMenuMoreOptions editor={editor} />}
					content={<EllipsisVertical size={16} />}
				/>
			</div>
		</BubbleMenu>
	)
}
