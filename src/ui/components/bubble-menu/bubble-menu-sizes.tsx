import { BubbleMenuButton, type BubbleMenuPopoverProps } from '@/ui'

export interface BubbleMenuSizesProps extends BubbleMenuPopoverProps {}

export const BubbleMenuSizes = ({ editor }: BubbleMenuSizesProps) => {
	return (
		<div>
			<div className="flex flex-col gap-2">
				<BubbleMenuButton
					onClick={() => editor.chain().focus().setFontSize('12px').run()}
					className={`justify-start ${editor.isActive('textStyle', { fontSize: '12px' }) ? 'is-active' : ''}`}
					content={
						<div>
							<span className="text-xs">Smaller</span>
						</div>
					}
				/>
				<BubbleMenuButton
					onClick={() => editor.chain().focus().setFontSize('14px').run()}
					className={`justify-start ${editor.isActive('textStyle', { fontSize: '14px' }) ? 'is-active' : ''}`}
					content={
						<div>
							<span className="text-sm">Small</span>
						</div>
					}
				/>
				<BubbleMenuButton
					onClick={() => editor.chain().focus().setFontSize('16px').run()}
					className={`justify-start ${editor.isActive('textStyle', { fontSize: '16px' }) ? 'is-active' : ''}`}
					content={
						<div>
							<span className="text-base">Medium</span>
						</div>
					}
				/>
				<BubbleMenuButton
					onClick={() => editor.chain().focus().setFontSize('18px').run()}
					className={`justify-start ${editor.isActive('textStyle', { fontSize: '18px' }) ? 'is-active' : ''}`}
					content={
						<div>
							<span className="text-lg">Large</span>
						</div>
					}
				/>
				<BubbleMenuButton
					onClick={() => editor.chain().focus().setFontSize('24px').run()}
					className={`justify-start ${editor.isActive('textStyle', { fontSize: '24px' }) ? 'is-active' : ''}`}
					content={
						<div>
							<span className="text-2xl">Extra Large</span>
						</div>
					}
				/>
			</div>
		</div>
	)
}
