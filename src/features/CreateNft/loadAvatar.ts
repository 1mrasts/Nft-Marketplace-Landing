import type { nftType } from '../../entities/nfts/model/types'

export function handleLoadClick(
	e: React.MouseEvent<HTMLAnchorElement>,
	inputRef: React.RefObject<HTMLInputElement | null>,
) {
	e.preventDefault()
	inputRef.current?.click() // Триггерим клик по input
}
export function handleFileChange(
	e: React.ChangeEvent<HTMLInputElement>,
	setNftForm: React.Dispatch<React.SetStateAction<nftType>>,
) {
	if (e.target.files && e.target.files[0]) {
		const file = e.target.files[0]
		const fileUrl = URL.createObjectURL(file) // создаём временный URL
		setNftForm(prev => ({ ...prev, image: fileUrl }))
	}
}
