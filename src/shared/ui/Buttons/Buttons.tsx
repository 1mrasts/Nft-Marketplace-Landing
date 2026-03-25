import type { MouseEventHandler } from 'react'

export function Button({
	switchFunction,
	arrowActive,
}: {
	switchFunction: MouseEventHandler<HTMLButtonElement>

	arrowActive: string
}) {
	return (
		<>
			<button onClick={switchFunction}>
				<img src={arrowActive} alt='' />
			</button>
		</>
	)
}
