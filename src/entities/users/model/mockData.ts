import avatar0 from '../avatar0.png'
import avatar1 from '../avatar1.png'
import avatar2 from '../avatar2.png'
import avatar3 from '../avatar3.png'
import avatar4 from '../avatar4.png'
import type { userType } from './types'

console.log(avatar0)
export const usersMockData: userType[] = [
	{
		id: 0,
		name: 'Alex Ca.',
		login: '@Alexy',
		isBest: true,
		avatar: avatar0,
		cash: 8456,
		floorPrice: 3.5,
		owners: 2.2,
		items: 500,
		follow: false,
	},
	{
		id: 1,
		name: 'Juliya Sa.',
		login: '@JuliyaS',
		isBest: true,
		avatar: avatar1,
		cash: 5327,
		floorPrice: 7.9,
		owners: 3.4,
		items: 900,
		follow: false,
	},
	{
		id: 2,
		name: 'Imrasts',
		login: '@imrasts',
		isBest: true,
		avatar: avatar4,
		cash: 5231,
		floorPrice: 3.5,
		owners: 2.2,
		items: 500,
		follow: true,
	},
	{
		id: 3,
		name: 'Veronika Kr.',
		login: '@Nika',
		isBest: true,
		avatar: avatar2,
		cash: 9999,
		floorPrice: 3.5,
		owners: 2.2,
		items: 500,
		follow: false,
	},
	{
		id: 4,
		name: 'Trevor Pu.',
		login: '@TrevorP',
		isBest: true,
		avatar: avatar3,
		cash: 20,
		floorPrice: 3.9,
		owners: 3.4,
		items: 560,
		follow: false,
	},
	{
		id: 5,
		name: 'Test T.',
		login: '@tested',
		isBest: true,
		avatar: avatar4,
		cash: 5231,
		floorPrice: 3.5,
		owners: 2.2,
		items: 500,
		follow: false,
	},
]
