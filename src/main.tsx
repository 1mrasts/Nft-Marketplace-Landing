import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router'
import { Router } from './app/routing'

createRoot(document.getElementById('root')!).render(
	<RouterProvider router={Router} />,
)
