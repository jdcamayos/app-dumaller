import { Box, Typography } from '@mui/material'
import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
	return (
		<>
			<Head>
				<title>Dumaller App</title>
				<meta name='description' content='Ecommerce platform' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Box sx={{ display: 'grid', placeContent: 'center' }}>
				<Typography>Welcome to Dumaller</Typography>
			</Box>
		</>
	)
}
