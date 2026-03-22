import { Link } from 'react-router'
import etherium from '../../../shared/assets/icons/Ethereum.svg'
import { useNfts } from '../model/useNfts'
import styles from './NftCard.module.scss'

export function NftCard({ id }: { id: number }) {
	const { nfts } = useNfts()
	const currentNft = nfts.filter(item => item.id == id)[0]
	return (
		<Link className={styles.card} to={`/nft/${currentNft.id}`}>
			<img className={styles['card__logo']} src={currentNft.image} alt='' />
			<div className={styles.time}>
				<span>{currentNft.expirationDate}</span>
			</div>
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
		</Link>
	)
}
