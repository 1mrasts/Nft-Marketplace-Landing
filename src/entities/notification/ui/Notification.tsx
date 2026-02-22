import { nftMockData } from '../../nfts/model/mockData'
import type { nftType } from '../../nfts/model/types'
import { usersMockData } from '../../users/model/mockData'
import type { userType } from '../../users/model/types'
import { getNotificationText } from '../model/getNotificationText'
import { notificationMockData } from '../model/mockData'
import type { notification } from '../model/types'
import styles from './Notification.module.scss'

export function Notification({ id }: { id: number }) {
	const notification: notification = notificationMockData.filter(
		item => item.id === id,
	)[0]
	const user: userType = usersMockData.filter(
		item => item.id === notification.idUser,
	)[0]
	const nft: nftType = nftMockData.filter(
		item => item.id === notification.idNft,
	)[0]

	return (
		<div className={styles.notification}>
			<div className={styles['notification__avatar']}>
				<div className='circle'></div>
				<img src={user.avatar} alt='' />
			</div>
			<div className={styles['notification__text']}>
				{getNotificationText(notification, user, nft)}
				<span>{notification.time}</span>
			</div>
			<div className={styles['notification__image']}>
				<img src={nft.image} alt='' />
			</div>
		</div>
	)
}
