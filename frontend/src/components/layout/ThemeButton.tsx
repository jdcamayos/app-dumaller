import { ColorModeContext } from '../../contexts/ThemeContext'
import { useTheme } from '@mui/material/styles'
import * as React from 'react'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import IconButton from '@mui/material/IconButton'

export default function ThemeButton() {
	const {
		palette: { mode },
	} = useTheme()

	const { toggleColorMode } = React.useContext(ColorModeContext)

	return (
		<IconButton color='inherit' aria-label='theme-mode' onClick={toggleColorMode}>
			{mode === 'dark' ? <Brightness4Icon /> : <Brightness7Icon />}
		</IconButton>
	)
}
