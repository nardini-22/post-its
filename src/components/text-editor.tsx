import { useCreateCardContext } from '@/contexts'
import Placeholder from '@tiptap/extension-placeholder'
import Underline from '@tiptap/extension-underline'
import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { BubbleMenuContent } from './bubble-menu-content'

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
