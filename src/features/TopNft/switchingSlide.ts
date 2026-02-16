import type { Dispatch, SetStateAction } from 'react'

export function nextSlide(
	length: number,
	setIndex: Dispatch<SetStateAction<number>>,
) {
	setIndex(prev =>
		prev >= Math.round(length / 2) - 2
			? Math.round((length / 2) * -1) + 2
			: prev + 1,
	)
}
export function previousSlide(
	length: number,
	setIndex: Dispatch<SetStateAction<number>>,
) {
	setIndex(prev =>
		prev <= Math.round((length / 2) * -1) + 2
			? Math.round(length / 2) - 2
			: prev - 1,
	)
}
