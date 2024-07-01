import { BubbleMenuButton, Button, Input } from '@/ui'
import { BubbleMenu, type Editor } from '@tiptap/react'
import { Bold, Code, CodeXml, Highlighter, Italic, Link, Palette, Strikethrough, Underline, Undo } from 'lucide-react'
import { useState } from 'react'

interface BubbleMenuContentProps {
	editor: Editor | null
}

export const BubbleMenuContent = ({ editor }: BubbleMenuContentProps) => {
	const [url, setUrl] = useState<string>('')
	return (
		editor && (
			<BubbleMenu editor={editor} tippyOptions={{ duration: 100 }}>
				<div className="bg-white border border-solid border-gray-200 rounded-xl flex p-1 gap-1">
					<BubbleMenuButton
						onClick={() => editor.chain().focus().toggleBold().run()}
						className={editor.isActive('bold') ? 'is-active' : ''}
						icon={<Bold size={16} />}
					/>
					<BubbleMenuButton
						onClick={() => editor.chain().focus().toggleItalic().run()}
						className={editor.isActive('italic') ? 'is-active' : ''}
						icon={<Italic size={16} />}
					/>
					<BubbleMenuButton
						onClick={() => editor.chain().focus().toggleUnderline().run()}
						className={editor.isActive('underline') ? 'is-active' : ''}
						icon={<Underline size={16} />}
					/>
					<BubbleMenuButton
						onClick={() => editor.chain().focus().toggleStrike().run()}
						className={editor.isActive('strike') ? 'is-active' : ''}
						icon={<Strikethrough size={16} />}
					/>
					<BubbleMenuButton
						onClick={() => editor.chain().focus().toggleCode().run()}
						className={editor.isActive('code') ? 'is-active' : ''}
						icon={<Code size={16} />}
					/>
					<BubbleMenuButton
						onClick={() => editor.chain().focus().toggleCodeBlock().run()}
						className={editor.isActive('codeBlock') ? 'is-active' : ''}
						icon={<CodeXml size={16} />}
					/>
					<BubbleMenuButton
						className={editor.isActive('link') ? 'is-active' : ''}
						icon={<Link size={16} />}
						popover={
							<div className="flex gap-4">
								<Input type="url" placeholder="Enter URL" onChange={(e) => setUrl(e.target.value)} />
								<Button
									onClick={() => editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run()}
									disabled={!url.includes('https://')}
								>
									Set Link
								</Button>
							</div>
						}
					/>
					<BubbleMenuButton
						className={`relative ${editor.isActive('highlight') ? 'is-active' : ''}`}
						icon={
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
						icon={
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
					<BubbleMenuButton onClick={() => editor.chain().focus().unsetAllMarks().run()} icon={<Undo size={16} />} />
				</div>
			</BubbleMenu>
		)
	)
}
