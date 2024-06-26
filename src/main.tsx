import App from '@/ui/app'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { CreateCardContextProvider } from './contexts/CreateCardContext/CreateCardContextProvider'
import './global.css'

// biome-ignore lint/style/noNonNullAssertion: <explanation>
ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<CreateCardContextProvider>
			<App />
		</CreateCardContextProvider>
	</React.StrictMode>,
)
