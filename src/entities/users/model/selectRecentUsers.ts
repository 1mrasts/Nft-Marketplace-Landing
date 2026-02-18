import { usersMockData } from './mockData'

export function getRecentUsers() {
	return [...usersMockData].sort((a, b) => b.cash - a.cash).slice(0, 2)
}
