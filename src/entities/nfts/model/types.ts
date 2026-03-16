export interface nftType {
	id: number
	name: string
	price: number
	expirationDate: string
	image: string
	idOwner: number
}

export type NftsContextType = {
	nfts: nftType[]
	addNft: (nft: nftType) => void
}
