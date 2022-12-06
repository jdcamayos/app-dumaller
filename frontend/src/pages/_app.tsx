import type { AppProps } from 'next/app'
import Layout from '../components/layout/Layout'
import AppProvider from '../contexts/AppContext'
import ThemeProvider from '../contexts/ThemeContext'

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider>
			<AppProvider>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</AppProvider>
		</ThemeProvider>
	)
}
