export interface nftType {
	id: number
	name: string
	description: string
	royalty: royalty
	size: number
	tags: string[]
	currency: currency
	price: number
	stock: string
	sale: boolean
	direct_sale: boolean
	expirationDate: string
	image: string
	idOwner: number
}

export type royalty =
	| 'Royalty'
	| 'Creator Fee'
	| 'Secondary Sale Fee'
	| 'Percentage'
	| 'Fixed Fee'
	| 'No Royalty'

export type currency = 'ETH' | 'BTC' | 'USDT'

export type NftsContextType = {
	nfts: nftType[]
	addNft: (nft: nftType) => void
}
