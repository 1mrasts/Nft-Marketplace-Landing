import { usersMockData } from './mockData'

export function getRecentUsers(count: number) {
	return [...usersMockData].sort((a, b) => b.cash - a.cash).slice(0, count)
}
