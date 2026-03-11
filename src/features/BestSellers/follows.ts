import type { Dispatch, SetStateAction } from 'react'
import type { userType } from '../../entities/users/model/types'

export function followsHandle(
	id: number,
	setUsers: Dispatch<SetStateAction<userType[]>>,
) {
	setUsers(prev =>
		prev.map(item =>
			item.id === id ? { ...item, follow: !item.follow } : item,
		),
	)
}
