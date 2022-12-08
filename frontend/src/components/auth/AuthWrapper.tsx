import * as React from 'react'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper'
import { RFC } from '../../types'
import { useTheme } from '@mui/material/styles'
import useAuth from '../../hooks/useAuth'

interface Props extends RFC {
	title: string
}

export default function AuthWrapper(props: Props) {
	const { auth } = useAuth()

	if (!!auth) return null

	return (
		<Container component='main' maxWidth='xs'>
			<Paper
				sx={{
					p: 3,
					marginTop: 2,
					marginBottom: 6,
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
				}}
			>
				<Stack justifyContent='center' alignItems='center' spacing={2} sx={{ marginBottom: 2 }}>
					<Avatar sx={{ width: 80, height: 80, bgcolor: 'primary.main' }}>
						<LockOutlinedIcon sx={{ fontSize: 50, color: 'white' }} />
					</Avatar>
					<Typography fontWeight={600} sx={{ fontSize: 38 }}>
						Dumaller
					</Typography>
				</Stack>
				<Typography component='h1' variant='h5'>
					{props.title}
				</Typography>
				{props.children}
			</Paper>
		</Container>
	)
}
