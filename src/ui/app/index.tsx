import { CreateCardButton } from '@/ui'
import { HelmetProvider } from 'react-helmet-async'
import { Head } from '../components/head'

function App() {
	return (
		<HelmetProvider>
			<CreateCardButton />
			<Head />
		</HelmetProvider>
	)
}

export default App
