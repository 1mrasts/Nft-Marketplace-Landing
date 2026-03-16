import { useContext } from 'react'
import { NftsContext } from './context'

// Создаём отдельный хук который передаём для получения данных
export function useNfts() {
	const context = useContext(NftsContext)
	if (!context) {
		throw new Error('useNfts must be used inside NftsProvider')
	}
	return context
}
