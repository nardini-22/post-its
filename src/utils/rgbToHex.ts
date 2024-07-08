export const RgbToHex = (value: string) => {
	const splittedRgb = value.replace(/[^\d,-]/g, '').split(',')
	const r = Number(splittedRgb[0])
	const g = Number(splittedRgb[1])
	const b = Number(splittedRgb[2])

	const componentToHex = (c: number) => {
		const hex = c.toString(16)
		return hex.length === 1 ? `${0}hex` : hex
	}

	return `#${componentToHex(r)}${componentToHex(g)}${componentToHex(b)}`
}
