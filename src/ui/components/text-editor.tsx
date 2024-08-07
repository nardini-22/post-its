import { useCreateCardContext } from '@/contexts'
import { BubbleMenuContent } from '@/ui'
import Color from '@tiptap/extension-color'
import Highlight from '@tiptap/extension-highlight'
import Link from '@tiptap/extension-link'
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
import FontSize from 'tiptap-extension-font-size'

interface TextEditorProps {
	id: number
	content: string
}

export const TextEditor = ({ id, content }: TextEditorProps) => {
	const { textEditorRef, handleEditCardProperties } = useCreateCardContext()
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
			TaskList,
			TaskItem.configure({
				nested: true,
			}),
			FontSize,
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
	})

	return (
		<span>
			{editor && <BubbleMenuContent editor={editor} />}
			<EditorContent
				ref={textEditorRef}
				id={id.toString()}
				className="cursor-text p-2 prose prose-sm prose-purple"
				editor={editor}
			/>
		</span>
	)
}
