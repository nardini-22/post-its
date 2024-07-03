import { useCreateCardContext } from '@/contexts'
import { BubbleMenuContent } from '@/ui'
import BulletList from '@tiptap/extension-bullet-list'
import Color from '@tiptap/extension-color'
import Heading from '@tiptap/extension-heading'
import Highlight from '@tiptap/extension-highlight'
import Link from '@tiptap/extension-link'
import ListItem from '@tiptap/extension-list-item'
import OrderedList from '@tiptap/extension-ordered-list'
import Placeholder from '@tiptap/extension-placeholder'
import Subscript from '@tiptap/extension-subscript'
import Superscript from '@tiptap/extension-superscript'
import TaskItem from '@tiptap/extension-task-item'
import TaskList from '@tiptap/extension-task-list'
import TextAlign from '@tiptap/extension-text-align'
import TextStyle from '@tiptap/extension-text-style'
import Underline from '@tiptap/extension-underline'
import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

interface TextEditorProps {
	id: number
	content: string
}

export const TextEditor = ({ id, content }: TextEditorProps) => {
	const { textEditorRef, handleEditCardProperties, setDisableDragging } = useCreateCardContext()
	const editor = useEditor({
		extensions: [
			StarterKit,
			Placeholder.configure({
				emptyEditorClass: 'is-editor-empty',
				placeholder: 'Escreva uma anotação...',
			}),
			Underline,
			Color,
			TextStyle,
			Highlight.configure({ multicolor: true }),
			Link.configure({
				autolink: true,
			}),
			Subscript,
			Superscript,
			TextAlign.configure({
				types: ['heading', 'paragraph'],
			}),
			ListItem,
			BulletList,
			OrderedList,
			TaskList,
			TaskItem.configure({
				nested: true,
			}),
			Heading.configure({
				levels: [1, 2, 3],
			}),
		],
		content,
		editorProps: {
			attributes: {
				class: 'outline-none',
			},
		},
		onUpdate: ({ editor }) => {
			handleEditCardProperties(Number(editor.options.element.id), { content: editor.getHTML() })
		},
		onFocus: () => {
			setDisableDragging(true)
		},
		onBlur: () => {
			setDisableDragging(false)
		},
	})

	return (
		<span>
			<BubbleMenuContent editor={editor} />
			<EditorContent
				ref={textEditorRef}
				id={id.toString()}
				className="cursor-text p-2 prose prose-sm prose-purple"
				editor={editor}
			/>
		</span>
	)
}
