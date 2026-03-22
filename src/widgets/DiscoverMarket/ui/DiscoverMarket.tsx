import { NftCard } from '../../../entities/nfts'
import type { nftType } from '../../../entities/nfts/model/types'
import { useNfts } from '../../../entities/nfts/model/useNfts'
import categoryIcon from '../../../shared/assets/icons/Body/Category.svg'
import collectionIcon from '../../../shared/assets/icons/Body/Collection.svg'
import priceIcon from '../../../shared/assets/icons/Body/Price.svg'
import styles from './DiscoverMarket.module.scss'

export function DiscoverMarket() {
	const nfts: nftType[] = useNfts().nfts

	return (
		<>
			<section className={`${styles.marketplace} wrapper`}>
				<div className={styles['marketplace__header']}>
					<h2>Discover NFTs</h2>
					<div className={`${styles.sort} button`}>
						<button className='button--negative'>
							<img src={categoryIcon} alt='' />
							Category
						</button>
						<button className='button--negative'>
							<img src={collectionIcon} alt='' />
							Collection
						</button>
						<button className='button--negative'>
							<img src={priceIcon} alt='' />
							Price
						</button>
					</div>
				</div>
				<div className={styles['marketplace__body']}>
					{nfts.map((item, index) => (
						<NftCard key={index} id={item.id} />
					))}
				</div>
			</section>
		</>
	)
}
