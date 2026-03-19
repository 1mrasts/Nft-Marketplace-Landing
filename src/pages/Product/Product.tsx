import { useParams } from 'react-router'
import { ProductNft } from '../../widgets/ProductNft'
export function Product() {
	const nft_id: number = Number(useParams())
	return (
		<>
			<ProductNft id={nft_id} />
		</>
	)
}
