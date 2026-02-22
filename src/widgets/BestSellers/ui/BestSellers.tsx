import { usersMockData } from '../../../entities/users/model/mockData'
import type { userType } from '../../../entities/users/model/types'
import styles from './BestSellers.module.scss'

export function BestSellers() {
	const users: userType[] = usersMockData
	return (
		<div className={styles.sellers}>
			<h3>Best Sellers</h3>
			<ul>
				{users.map((item, index) => (
					<li key={index} className={styles.seller}>
						<div className={styles['seller__body']}>
							<div className={styles['seller__avatar']}>
								<div>
									<span>{index}</span>
								</div>
								<img src={item.avatar} alt='' />
							</div>
							<div className={styles['seller__text']}>
								<p>{item.name}</p>
								<span>{item.login}</span>
							</div>
						</div>
						<div className='button'>
							<button className='button--follow'>Follow</button>
						</div>
					</li>
				))}
			</ul>
		</div>
	)
}
