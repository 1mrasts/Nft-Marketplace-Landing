import heroBanner from '../Hero-banner.png'
import styles from './Hero.module.scss'

export function Hero() {
	return (
		<section className={styles.hero}>
			<img src={heroBanner} alt='Header' />
			<div className={styles['hero__text']}>
				<div>
					<h1>Discover And Create NFTs</h1>
					<p>
						Discover, Create and Sell NFTs On Our NFT Marketplace With Over
						Thousands Of NFTs And Get a <span>$20 bonus.</span>
					</p>
				</div>
				<div className={`${styles['hero__buttons']} button padding-18-30`}>
					<button>EXPLORE MORE</button>
					<button className='button--negative'>CREATE NFT</button>
				</div>
			</div>
		</section>
	)
}
