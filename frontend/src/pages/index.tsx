import { Box, Grid, Paper, TextField, Typography } from '@mui/material'
import Head from 'next/head'
import Image from 'next/image'
import DeliveryCalculator from '../components/home/DeliveryCalculator'
import InputRadioOptions from '../components/misc/InputRadioOptions'

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
					<DeliveryCalculator />
				</Grid>
			</Grid>
		</>
	)
}
