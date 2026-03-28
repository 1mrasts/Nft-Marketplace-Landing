import { usersMockData } from '../../../entities/users/model/mockData'
import { ExploreAll } from '../../../shared/'
import etherium from '../../../shared/assets/icons/Ethereum.svg'
import styles from './TopCollection.module.scss'

export function TopCollection() {
	const users = usersMockData

	return (
		<section className={`${styles.collection} mt-300 wrapper`}>
			<h2>Top Collection</h2>
			<div className={styles['collection__table']}>
				<div className={styles['collection__cols']}>
					<span>Collection</span>
					<div className={styles['collection__description']}>
						<span>Volume</span>
						<span id='adaptive-hide'>24h %</span>
						<span id='adaptive-hide'>Floor Price</span>
						<span id='adaptive-hide'>Owners</span>
						<span id='adaptive-hide'>Items</span>
					</div>
				</div>
				<ul className={`${styles['column']}`}>
					{users.map((item, index) => (
						<li key={index} className={`${styles['collection__cols']}`}>
							<div className={styles['collection__person']}>
								<img src={item.avatar} alt='' />
								<div className={styles['collection__name']}>
									<p>{item.name}</p>
									<span>By {item.login}</span>
								</div>
							</div>
							<div
								id={styles['collection_description--adaptive']}
								className={`${styles['collection__description']} ${styles['gap-135']}`}
							>
								<div className={styles['collection__price']}>
									<img src={etherium} alt='' />
									<p>{item.cash.toLocaleString('en-US')}</p>
								</div>
								<span className='up'>%</span>
								<div id='adaptive-hide' className={styles['collection__price']}>
									<img src={etherium} alt='' />
									<p>{item.floorPrice}</p>
								</div>
								<span id='adaptive-hide'>{item.owners}</span>
								<span id='adaptive-hide'>{item.items}</span>
							</div>
						</li>
					))}
				</ul>
			</div>
			<ExploreAll path='discover' />
		</section>
	)
}
