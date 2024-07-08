import { CreateCardButton, Head, Header } from '@/ui'
import { HelmetProvider } from 'react-helmet-async'

function App() {
	return (
		<HelmetProvider>
			<Header />
			<CreateCardButton />
			<Head />
		</HelmetProvider>
	)
}

export default App
