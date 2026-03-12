import banner__img from '../banner-image.png'
import styles from './Banner.module.scss'

export function Banner() {
	return (
		<>
			<section className={`${styles.banner} wrapper`}>
				<div className={styles['banner__block']}>
					<h2>Create and Sell NFTs</h2>
					<div className={styles['banner__body']}>
						<h3>World’s Largest NFT Place</h3>
						<div className={`${styles['banner__buttons']} button`}>
							<button className='button--white'>Explore More</button>
							<button className='button--white-negative'>Sell Artwork</button>
						</div>
					</div>
					<img src={banner__img} alt='Баннер' />
				</div>
			</section>
		</>
	)
}
