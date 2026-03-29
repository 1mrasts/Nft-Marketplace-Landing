export function burgerClickHandle(
	setHideToggle: React.Dispatch<React.SetStateAction<string>>,
) {
	setHideToggle(prev => (prev == '' ? 'open' : ''))
}
