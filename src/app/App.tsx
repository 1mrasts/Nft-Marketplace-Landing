import { Outlet } from 'react-router'
import { Header } from '../widgets/Header'
import './styles/styles.scss'

export function App() {
	return (
		<>
			<Header />
			<Outlet />
		</>
	)
}
