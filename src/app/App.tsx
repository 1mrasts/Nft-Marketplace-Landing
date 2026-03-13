import { Outlet } from 'react-router'
import { Footer } from '../widgets/Footer'
import { Header } from '../widgets/Header'
import './styles/styles.scss'

export function App() {
	return (
		<>
			<Header />
			<Outlet />
			<Footer />
		</>
	)
}
