import { Outlet } from 'react-router'
import NftsProvider from '../entities/nfts/model/nftsContext'
import { Footer } from '../widgets/Footer'
import { Header } from '../widgets/Header'
import './styles/styles.scss'

export function App() {
	return (
		<>
			<Header />
			<NftsProvider>
				<Outlet />
			</NftsProvider>
			<Footer />
		</>
	)
}
