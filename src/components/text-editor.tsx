import { useCreateCardContext } from '@/contexts'
import Placeholder from '@tiptap/extension-placeholder'
import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

interface TextEditorProps {
	id: number
}

export const TextEditor = ({ id }: TextEditorProps) => {
	const editor = useEditor({
		extensions: [
			StarterKit,
			Placeholder.configure({
				placeholder: 'Escreva uma anotação...',
			}),
		],
		editorProps: {
			attributes: {
				class: 'outline-none',
			},
		},
	})
	const { textEditorRef } = useCreateCardContext()

	return <EditorContent ref={textEditorRef} id={id.toString()} className="cursor-text p-2" editor={editor} />
}
