import { useParams } from 'react-router'
import { ProductNft } from '../../widgets/ProductNft'
export function Product() {
	const { id } = useParams()
	return (
		<>
			<ProductNft id={id} />
		</>
	)
}
