import { RFC } from '../../types/common'
import * as React from 'react'
import Box from '@mui/material/Box'
import useAuth from '../../hooks/useAuth'
import Dashboard from './Dashboard'

export default function Layout(props: RFC) {
	const { auth } = useAuth()

	return (
		<Box
			sx={{
				bgcolor: theme => (theme.palette.mode === 'dark' ? theme.palette.grey[800] : theme.palette.grey[100]),
				color: theme => (theme.palette.mode === 'dark' ? theme.palette.grey[100] : theme.palette.grey[800]),
				transition: theme => theme.transitions.create(['background', 'color']),
			}}
		>
			{auth ? (
				<>
					<Box>
						<Dashboard>
							{props.children}
						</Dashboard>
					</Box>
				</>
			) : (
				<Box sx={{ minHeight: '100vh', width: '100%', display: 'grid', placeContent: 'center' }}>{props.children}</Box>
			)}
		</Box>
	)
}
