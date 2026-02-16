import type { MouseEventHandler } from 'react'

export function Button({
	type,
	switchFunction,
	index,
	length,
	arrowActive,
	arrowInactive,
}: {
	type: string
	switchFunction: MouseEventHandler<HTMLButtonElement>
	index: number
	length: number
	arrowActive: string
	arrowInactive: string
}) {
	return (
		<>
			<button onClick={switchFunction}>
				<img
					src={
						type == 'next'
							? index >= Math.round(length / 2) - 2
								? arrowInactive
								: arrowActive
							: index <= Math.round((length / 2) * -1) + 2
								? arrowInactive
								: arrowActive
					}
					alt=''
				/>
			</button>
		</>
	)
}
