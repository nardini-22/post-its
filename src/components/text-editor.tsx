import Placeholder from '@tiptap/extension-placeholder'
import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

export const TextEditor = () => {
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

	return <EditorContent className="cursor-text p-2" editor={editor} />
}
