import { useState, type ReactNode } from 'react'
import { NftsContext } from './context'
import { nftMockData } from './mockData'
import type { nftType } from './types'

// Типизируем полученные пропсы
type Props = {
	children: ReactNode
}

// Создаём провайдер который будет передавать данные (NFT)
export default function NftsProvider({ children }: Props) {
	// Используя useState передаём внутрь функцию которая загружает данные из localStorage и проверяет, если они есть - парсит их, если нет - загружает из mockData
	const [nfts, setNfts] = useState<nftType[]>(() => {
		const saved = localStorage.getItem('nfts')
		return saved ? JSON.parse(saved) : nftMockData
	})

	// Функция добавления NFT
	function addNft(nft: nftType) {
		setNfts(prev => {
			const next = [...prev, nft]

			// сохраняем в localStorage
			localStorage.setItem('nfts', JSON.stringify(next))
			return next
		})
	}
	return (
		// передаём state и функцию во все вложенные компоненты
		<NftsContext.Provider value={{ nfts, addNft }}>
			{children}
		</NftsContext.Provider>
	)
}
