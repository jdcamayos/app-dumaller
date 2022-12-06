import { Box, Grid, Paper, Typography } from '@mui/material'
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
			<Grid container spacing={3}>
				{/* Chart */}
				<Grid item xs={12} md={8} lg={9}>
					<Paper
						sx={{
							p: 2,
							display: 'flex',
							flexDirection: 'column',
							height: 240,
						}}
					>
						{/* <Chart /> */}
					</Paper>
				</Grid>
				{/* Recent Deposits */}
				<Grid item xs={12} md={4} lg={3}>
					<Paper
						sx={{
							p: 2,
							display: 'flex',
							flexDirection: 'column',
							height: 240,
						}}
					>
						{/* <Deposits /> */}
					</Paper>
				</Grid>
				{/* Recent Orders */}
				<Grid item xs={12}>
					<Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>{/* <Orders /> */}</Paper>
				</Grid>
			</Grid>
		</>
	)
}
