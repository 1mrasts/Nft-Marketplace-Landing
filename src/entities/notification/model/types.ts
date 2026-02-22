export type notificationType = 'buy' | 'bid' | 'list'
export type notification = {
	id: number
	type: notificationType
	idNft: number
	idUser: number
	time: string
}
