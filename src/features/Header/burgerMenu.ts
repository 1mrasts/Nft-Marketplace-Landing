export function burgerClickHandle(
	setHideToggle: React.Dispatch<React.SetStateAction<string>>,
) {
	// TODO: сделать логику появления меню по нажатию на burger
	console.log('Бургер меню открыто')
	setHideToggle(prev => (prev == '' ? 'open' : ''))
}
