import { useNavigate } from 'react-router'
import { useNfts } from '../../../entities/nfts/model/useNfts'
import { usersMockData } from '../../../entities/users/model/mockData'
import { Ethereum } from '../../../shared'
import creatorLogo from '../creator.png'
import leftArrow from '../left-arrow.svg'
import ownerLogo from '../owner.png'
import wallet from '../wallet.svg'
import styles from './ProductNft.module.scss'

export function ProductNft({ id }: { id: string | undefined }) {
	const navigate = useNavigate()
	const nft = useNfts().nfts.filter(item => item.id == Number(id))[0]
	const owner = usersMockData.filter(item => item.id == nft.idOwner)[0]
	return (
		<>
			<section className={`${styles.product} wrapper`}>
				<div
					id='adaptive-hide'
					onClick={() => navigate(-1)}
					className={styles['back']}
				>
					<img src={leftArrow} alt='' />
					<h3>Product Detail</h3>
				</div>
				<div className={styles.wrapper}>
					<div className={styles['product__block']}>
						<div className={styles['avatar']}>
							<img src={nft.image} alt='' />
						</div>
						<div className={`${styles['product__info']} button`}>
							<div className={styles['text__block']}>
								<h2>{nft.name}</h2>
								<p>{nft.description}</p>
							</div>
							<div className={styles['author__block']}>
								<div className={styles['author']}>
									<img src={creatorLogo} alt='' />
									<div className={styles['creator__text']}>
										<p>Created by</p>
										<h3>Anon</h3>
									</div>
								</div>
								<div className={styles['author']}>
									<img src={ownerLogo} alt='' />
									<div className={styles['creator__text']}>
										<p>Created by</p>
										<h3>{owner.name}</h3>
									</div>
								</div>
							</div>
							<div className={styles['info__block']}>
								<div className={styles['info']}>
									<p>Current Bid</p>
									<div className={styles['price']}>
										<img src={Ethereum} alt='' />
										<h4>{nft.price}</h4>
									</div>
								</div>
								<div className={`${styles['info']} ${styles['align-left']}`}>
									<p>End in</p>
									<span>{nft.expirationDate}</span>
								</div>
							</div>
							<button className={styles['button']}>
								<img src={wallet} alt='' />
								Place Bid
							</button>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
