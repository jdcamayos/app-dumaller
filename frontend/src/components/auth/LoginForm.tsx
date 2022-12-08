import { Box, Button, Divider, Grid, Link, TextField } from '@mui/material'
import * as React from 'react'
import RouterLink from 'next/link'
import useAuth from '../../hooks/useAuth'
import AuthWithProvider from './AuthWithProvider'

export default function LoginForm() {
	const { signIn, signWithProvider } = useAuth()
	const [credentials, setCredentials] = React.useState({
		email: '',
		password: '',
	})
	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		signIn(credentials)
	}

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setCredentials(prev => ({
			...prev,
			[event.target.name]: event.target.value,
		}))
	}

	return (
		<Box component='form' noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
			<Grid container spacing={2}>
				<Grid item xs={12}>
					<TextField
						onChange={handleChange}
						required
						fullWidth
						label='Correo electronico'
						name='email'
						autoComplete='email'
					/>
				</Grid>
				<Grid item xs={12}>
					<TextField
						onChange={handleChange}
						required
						fullWidth
						name='password'
						label='Contraseña'
						type='password'
						autoComplete='new-password'
					/>
				</Grid>
			</Grid>
			<Button type='submit' fullWidth variant='contained' sx={{ mt: 3, mb: 2 }}>
				Iniciar sesión
			</Button>
			<Divider />
			<AuthWithProvider signWithProvider={signWithProvider} />
			<Grid container justifyContent='center'>
				<Grid item>
					<Link href='/auth/register' component={RouterLink}>{`No tienes una cuenta?, Registrate aqui`}</Link>
				</Grid>
			</Grid>
		</Box>
	)
}
