import { createBrowserRouter } from 'react-router'
import { Discover } from '../../pages/Discover'
import { Home } from '../../pages/Home'
import { Product } from '../../pages/Product'
import { Sell } from '../../pages/Sell'
import { App } from '../App'

export const Router = createBrowserRouter(
	[
		{
			path: '/',
			element: <App />,
			children: [
				{
					index: true,
					element: <Home />,
				},
				{
					path: '/discover',
					element: <Discover />,
				},
				{
					path: '/sell',
					element: <Sell />,
				},
				{
					path: '/nft/:id',
					element: <Product />,
				},
			],
		},
	],
	{
		basename: '/Nft-Marketplace-Landing/',
	},
)
