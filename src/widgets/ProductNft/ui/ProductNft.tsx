import { useNfts } from '../../../entities/nfts/model/useNfts'

export function ProductNft({ id }: { id: string | undefined }) {
	const nft = useNfts().nfts.filter(item => item.id == Number(id))[0]
	console.log(id)
	console.log(nft.id)
	return <div>{nft.name}</div>
}
