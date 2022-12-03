import { Avatar, Box, Container, Divider, Paper, Stack, Typography } from '@mui/material'
import * as React from 'react'
import { RFC } from '../../types'

interface Props extends RFC {
	links: React.ReactNode | React.ReactNode[]
	icon: React.ReactNode
	title: string
	subtitle: string
}

export default function AuthFormWrapper(props: Props) {
	const { links, icon, title, subtitle, children } = props
	return (
		<Container>
			<Box sx={{ minHeight: '100vh', display: 'grid', placeContent: 'center' }}>
				<Box maxWidth='sm'>
					<Paper sx={{ width: '100%' }}>
						<Stack alignItems='center' sx={{ p: 2 }} spacing={1}>
							<Avatar sx={{ bgcolor: 'primary.main', color: 'white', width: 60, height: 60, fontSize: 48 }}>{icon}</Avatar>
							<Typography align='center' variant='h5'>
								{title}
							</Typography>
							<Typography align='center' variant='body2' sx={{ maxWidth: 320 }}>
								{subtitle}
							</Typography>
						</Stack>
						<Divider />
						{children}
						<Divider />
						<Stack sx={{ p: 2 }} spacing={1}>
							{links}
						</Stack>
					</Paper>
				</Box>
			</Box>
		</Container>
	)
}
