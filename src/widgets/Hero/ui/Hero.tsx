import { useNavigate } from 'react-router'
import heroBanner from '../Hero-banner.png'
import trust from '../Trust Reviews.png'
import styles from './Hero.module.scss'

export function Hero() {
	const navigate = useNavigate()

	return (
		<section className={`${styles.hero} wrapper`}>
			<div className={styles['hero__text']}>
				<div className={styles['hero__desc']}>
					<div id='adaptive-show' className={styles['creators__text']}>
						<div className={styles['sep-horiz']}></div>
						<p>OVER 1M CREATORS</p>
					</div>
					<h1>
						Discover And
						<br /> Create NFTs
					</h1>
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
			<img src={trust} alt='' className='mt-20' />
			<img className={styles['hero__banner']} src={heroBanner} alt='Header' />
		</section>
	)
}
