import { useState } from 'react'
import { usersMockData } from '../../../entities/users/model/mockData'
import type { userType } from '../../../entities/users/model/types'
import { followsHandle } from '../../../features'
import styles from './BestSellers.module.scss'

export function BestSellers() {
	const [users, setUsers] = useState<userType[]>(usersMockData)
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
						{item.follow ? (
							<div
								className='button'
								onClick={() => followsHandle(item.id, setUsers)}
							>
								<button className='button--unfollow'>Unfollow</button>
							</div>
						) : (
							<div
								className='button'
								onClick={() => followsHandle(item.id, setUsers)}
							>
								<button className='button--follow'>Follow</button>
							</div>
						)}
					</li>
				))}
			</ul>
		</div>
	)
}
