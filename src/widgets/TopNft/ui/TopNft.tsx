import { NftCard } from '../../../entities/nfts'
import styles from './TopNft.module.scss'

export function TopNft() {
	return (
		<section className={`${styles['top-nft']} mt-300`}>
			<h2>Weekly - Top NFT</h2>
			<ul>
				<NftCard id={0} />
				<NftCard id={1} />
				<NftCard id={2} />
				<NftCard id={3} />
				<NftCard id={4} />
				<NftCard id={5} />
				<NftCard id={0} />
			</ul>
		</section>
	)
}
