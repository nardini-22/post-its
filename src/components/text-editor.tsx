import { useCreateCardContext } from '@/contexts'
import Placeholder from '@tiptap/extension-placeholder'
import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

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
		],
		content,
		editorProps: {
			attributes: {
				class: 'outline-none',
			},
		},
		onUpdate: ({ editor }) => {
			handleEditCardProperties(Number(editor.options.element.id), { content: editor.getText() })
		},
	})

	return <EditorContent ref={textEditorRef} id={id.toString()} className="cursor-text p-2" editor={editor} />
}
