import { BubbleMenuButton, type BubbleMenuContentProps } from '@/ui'
import { Heading1, Heading2, Heading3, List, ListOrdered, ListTodo, Pilcrow } from 'lucide-react'

interface BubbleMenuListsProps extends BubbleMenuContentProps {}

export const BubbleMenuLists = ({ editor }: BubbleMenuListsProps) => {
	return (
		<div>
			<div className="flex flex-col gap-2">
				<p>Hierarchy</p>
				<BubbleMenuButton
					onClick={() => editor.chain().focus().setParagraph().run()}
					className={`justify-start ${editor.isActive('paragraph') ? 'is-active' : ''}`}
					content={
						<div className="flex gap-2 items-center">
							<Pilcrow size={16} /> Paragraph
						</div>
					}
				/>
				<BubbleMenuButton
					onClick={() => editor.chain().focus().setHeading({ level: 1 }).run()}
					className={`justify-start ${editor.isActive('heading', { level: 1 }) ? 'is-active' : ''}`}
					content={
						<div className="flex gap-2 items-center">
							<Heading1 size={16} /> Heading 1
						</div>
					}
				/>
				<BubbleMenuButton
					onClick={() => editor.chain().focus().setHeading({ level: 2 }).run()}
					className={`justify-start ${editor.isActive('heading', { level: 2 }) ? 'is-active' : ''}`}
					content={
						<div className="flex gap-2 items-center">
							<Heading2 size={16} /> Heading 2
						</div>
					}
				/>
				<BubbleMenuButton
					onClick={() => editor.chain().focus().setHeading({ level: 3 }).run()}
					className={`justify-start ${editor.isActive('heading', { level: 3 }) ? 'is-active' : ''}`}
					content={
						<div className="flex gap-2 items-center">
							<Heading3 size={16} /> Heading 3
						</div>
					}
				/>
			</div>
			<div className="flex flex-col gap-2">
				<p>Lists</p>
				<BubbleMenuButton
					onClick={() => editor.chain().focus().toggleBulletList().run()}
					className={`justify-start ${editor.isActive('bulletList') ? 'is-active' : ''}`}
					content={
						<div className="flex gap-2 items-center">
							<List size={16} /> Bullet List
						</div>
					}
				/>
				<BubbleMenuButton
					onClick={() => editor.chain().focus().toggleOrderedList().run()}
					className={`justify-start ${editor.isActive('orderedList') ? 'is-active' : ''}`}
					content={
						<div className="flex gap-2 items-center">
							<ListOrdered size={16} /> Numbered List
						</div>
					}
				/>
				<BubbleMenuButton
					onClick={() => editor.chain().focus().toggleTaskList().run()}
					className={`justify-start ${editor.isActive('taskList') ? 'is-active' : ''}`}
					content={
						<div className="flex gap-2 items-center">
							<ListTodo size={16} /> Todo List
						</div>
					}
				/>
			</div>
		</div>
	)
}
