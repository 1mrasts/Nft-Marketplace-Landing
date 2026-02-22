import type { nftType } from '../../nfts/model/types'
import type { userType } from '../../users/model/types'
import type { notification } from './types'

export function getNotificationText(
	notification: notification,
	user: userType,
	nft: nftType,
) {
	switch (notification.type) {
		case 'buy':
			return (
				<p>
					${user.name} bought {nft.name}
				</p>
			)
		case 'bid':
			return (
				<p>
					{user.name} placed a bid on {nft.name}
				</p>
			)
		case 'list':
			return (
				<p>
					${user.name} listed {nft.name}
				</p>
			)
	}
}
