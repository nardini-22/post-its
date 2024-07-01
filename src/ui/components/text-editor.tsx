import { useCreateCardContext } from '@/contexts'
import Color from '@tiptap/extension-color'
import Highlight from '@tiptap/extension-highlight'
import Placeholder from '@tiptap/extension-placeholder'
import TextStyle from '@tiptap/extension-text-style'
import Underline from '@tiptap/extension-underline'
import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { BubbleMenuContent } from './bubble-menu-content'

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
				className="cursor-text p-2 prose prose-neutral prose-sm"
				editor={editor}
			/>
		</span>
	)
}
