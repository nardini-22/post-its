import type { Editor } from '@tiptap/react'
import { List, ListOrdered, ListTodo } from 'lucide-react'
import { BubbleMenuButton } from './bubble-menu-button'

interface BubbleMenuListsProps {
	editor: Editor
}

export const BubbleMenuLists = ({ editor }: BubbleMenuListsProps) => {
	return (
		<div className="flex flex-col gap-1 p-1">
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
	)
}
