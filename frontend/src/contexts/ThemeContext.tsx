import * as React from 'react'
import { createTheme, ThemeProvider as MUIThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { RFC } from '../types'

export const ColorModeContext = React.createContext({ toggleColorMode: () => {} })

interface Props extends RFC {}

export default function ThemeProvider(props: Props) {
	const [mode, setMode] = React.useState<'light' | 'dark'>('light')

	const colorMode = React.useMemo(
		() => ({
			toggleColorMode: () => {
				setMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'))
			},
		}),
		[]
	)

	const theme = React.useMemo(
		() =>
			createTheme({
				palette: {
					mode,
				},
			}),
		[mode]
	)

	return (
		<ColorModeContext.Provider value={colorMode}>
			<MUIThemeProvider theme={theme}>
				<CssBaseline />
				{props.children}
			</MUIThemeProvider>
		</ColorModeContext.Provider>
	)
}
