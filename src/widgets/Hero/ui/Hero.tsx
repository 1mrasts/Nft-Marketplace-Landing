import { useNavigate } from 'react-router'
import heroBanner from '../Hero-banner.png'
import styles from './Hero.module.scss'

export function Hero() {
	const navigate = useNavigate()

	return (
		<section className={`${styles.hero} wrapper`}>
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
					<button onClick={() => navigate('/discover')}>EXPLORE MORE</button>
					<button
						className='button--negative'
						onClick={() => navigate('/sell')}
					>
						CREATE NFT
					</button>
				</div>
			</div>
		</section>
	)
}
