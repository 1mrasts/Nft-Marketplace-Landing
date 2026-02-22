import { Notification } from '../../../entities/notification'
import { BestSellers } from '../../BestSellers'
import { Recent } from '../../Recent'
import arrowWhite from '../Arrow-white.svg'
import dots from '../Dots.svg'
import styles from './Unleash.module.scss'

export function Unleash() {
	return (
		<>
			<section className={`${styles.unleash} wrapper`}>
				<div className='sep-horiz'></div>
				<div className={styles['unleash__body']}>
					<div className={styles['unleash__text']}>
						<h2>
							<span>Just Unleash -</span>
							<br />
							Your Inner Collector
						</h2>
						<ul>
							<li>Best Seller All Around World</li>
							<li>$2M+ Transections Every Day</li>
							<li>Secure Transactions</li>
							<li>Exclusive Collections From Sellers</li>
							<li>Easy Buying and Selling</li>
							<li>Join Our Community</li>
						</ul>
					</div>
					<div className='button'>
						<button>
							Explore More <img src={arrowWhite} alt='' />
						</button>
					</div>
				</div>
				<div className={styles.recent}>
					<Recent count={2} />
				</div>
				<BestSellers />
				<Notification id={0} />
				<img className={styles['bg-abstract']} src={dots} alt='' />
			</section>
		</>
	)
}
