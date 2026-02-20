import { useMemo } from 'react'
import { Link } from 'react-router'
import { usersMockData } from '../../../entities/users/model/mockData'
import arrowRightLink from '../../../shared/assets/icons/Arrow-right-link.svg'
import etherium from '../../../shared/assets/icons/Ethereum.svg'
import styles from './TopCollection.module.scss'

export function TopCollection() {
	const users = usersMockData
	const randomDiscount = useMemo(() => {
		return Math.floor(Math.random() * 1000)
	}, [])

	return (
		<section className={`${styles.collection} mt-300 wrapper`}>
			<h2>Top Collection</h2>
			<div className={styles['collection__table']}>
				<div className={styles['collection__cols']}>
					<span>Collection</span>
					<div className={styles['collection__description']}>
						<span>Volume</span>
						<span>24h %</span>
						<span>Floor Price</span>
						<span>Owners</span>
						<span>Items</span>
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
								className={`${styles['collection__description']} ${styles['gap-135']}`}
							>
								<div className={styles['collection__price']}>
									<img src={etherium} alt='' />
									<p>{item.cash.toLocaleString('en-US')}</p>
								</div>
								<span className='up'>%</span>
								<div className={styles['collection__price']}>
									<img src={etherium} alt='' />
									<p>{item.floorPrice}</p>
								</div>
								<span>{item.owners}</span>
								<span>{item.items}</span>
							</div>
						</li>
					))}
				</ul>
			</div>
			<div className={styles.more}>
				<Link to='discover'>
					Explore All <img src={arrowRightLink} alt='' />
				</Link>
			</div>
		</section>
	)
}
