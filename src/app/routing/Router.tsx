import { createBrowserRouter } from 'react-router'
import { Home } from '../../pages/Home'
import { App } from '../App'

export const Router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				index: true,
				element: <Home />,
			},
		],
	},
])
