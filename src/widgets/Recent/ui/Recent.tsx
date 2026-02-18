import { getRecentUsers } from '../../../entities/users/model/selectRecentUsers'
import etherium from '../../../shared/assets/icons/Ethereum.svg'
import dots from '../dots-vertical.svg'
import styles from './Recent.module.scss'

export function Recent() {
	const users = getRecentUsers()

	return (
		<section className={styles.recent}>
			<div className={styles['recent__title']}>
				<h3>Recent Viewed</h3>
				<img src={dots} alt='' />
			</div>
			<ul className={styles['recent__lists']}>
				{users.map((item, index) => (
					<li key={item.id}>
						<div className={styles['lists__person']}>
							<div className={styles['lists__logo']}>
								<img src={item.avatar} alt='' />
								<div className={styles['count']}>{index + 1}</div>
							</div>
							<div className={styles['lists__col']}>
								<h6>{item.name}</h6>
								<p>{item.login}</p>
							</div>
						</div>
						<div className={`${styles['lists__col']} ${styles['align-right']}`}>
							<div className={styles['lists__price']}>
								<img src={etherium} alt='' />
								<h5>{item.cash.toLocaleString('en-US')}</h5>
							</div>
							<p className='up'>%</p>
						</div>
					</li>
				))}
			</ul>
		</section>
	)
}
