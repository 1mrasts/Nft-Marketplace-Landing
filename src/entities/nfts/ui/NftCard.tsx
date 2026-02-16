import etherium from '../Ethereum.svg'
import { mockData } from '../model/mockData'
import type { nftType } from '../model/types'
import styles from './NftCard.module.scss'

export function NftCard({ id }: { id: number }) {
	const nft: nftType[] = mockData.filter(item => item.id == id)
	const currentNft = nft[0]
	return (
		<div className={styles.card}>
			<img src={currentNft.image} alt='' />
			<div className={styles['card__text']}>
				<h3>{currentNft.name}</h3>
				<div className={`${styles['card__description']} button`}>
					<div className={styles['card__price']}>
						<p>Current bid</p>
						<div className={styles['card__etherium']}>
							<img src={etherium} alt='' />
							<span>{currentNft.price}</span>
						</div>
					</div>
					<button className='button--gray'>PLACE BID</button>
				</div>
			</div>
		</div>
	)
}
