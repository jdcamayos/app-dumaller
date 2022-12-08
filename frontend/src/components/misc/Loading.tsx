import { Box, CircularProgress } from '@mui/material'
import * as React from 'react'

interface Props {
	isPage?: boolean
}

export default function Loading(props: Props) {
	const { isPage } = props
	return (
		<Box
			sx={{
				height: isPage ? '100vh' : '100%',
				width: isPage ? '100vw' : '100%',
				display: 'grid',
				placeContent: 'center',
				bgcolor: theme => (theme.palette.mode === 'dark' ? theme.palette.grey[800] : theme.palette.grey[100]),
			}}
		>
			<CircularProgress />
		</Box>
	)
}
