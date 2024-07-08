import { type BubbleMenuContentProps, Button, Input } from '@/ui'
import { useState } from 'react'

interface BubbleMenuLinkProps extends BubbleMenuContentProps {}

export const BubbleMenuLink = ({ editor }: BubbleMenuLinkProps) => {
	const [url, setUrl] = useState<string>('')

	return (
		<div className="flex gap-4">
			<Input type="url" placeholder="Enter URL" onChange={(e) => setUrl(e.target.value)} />
			<Button
				onClick={() => editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run()}
				disabled={!url.includes('https://')}
			>
				Set Link
			</Button>
		</div>
	)
}
