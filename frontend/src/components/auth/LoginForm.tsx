import { Box, Button, Divider, Grid, Link, TextField, Typography } from '@mui/material'
import * as React from 'react'
import RouterLink from 'next/link'
import useAuth from '../../hooks/useAuth'
import InputPassword from './InputPassword'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const loginValidation = Yup.object({
	email: Yup.string().required('Correo requerido'),
	password: Yup.string().required('Contraseña es obligatoria'),

})

export default function LoginForm() {
	const { signIn, loading } = useAuth()

	const formik = useFormik({
		initialValues: {
			email: '',
			password: '',
		},
		validationSchema: loginValidation,
		onSubmit: (credentials) => {
			signIn(credentials)
		}
	})

	return (
		<Box component='form' noValidate onSubmit={formik.handleSubmit} sx={{ mt: 3 }}>
			<Grid container spacing={2}>
				<Grid item xs={12}>
					<TextField
						size='small'
						onChange={formik.handleChange}
						value={formik.values.email}
						error={!!formik.errors.email}
						required
						fullWidth
						label='Correo electronico'
						name='email'
						helperText={formik.errors.email}
						autoComplete='email'
					/>
				</Grid>
				<Grid item xs={12}>
					<InputPassword
						size='small'
						onChange={formik.handleChange}
						value={formik.values.password}
						error={!!formik.errors.password}
						required
						fullWidth
						name='password'
						helperText={formik.errors.password}
						label='Contraseña'
						autoComplete='new-password'
					/>
				</Grid>
				<Grid item xs={12}>
					<Link href='/auth/login' component={RouterLink}>
						<Typography align='right'>
							Olvidaste tu contraseña?
						</Typography>
					</Link>
				</Grid>
			</Grid>
			<Button type='submit' fullWidth variant='contained' sx={{ mt: 3, mb: 2 }}>
				{loading ? 'Cargando' : 'Iniciar sesión'}
			</Button>
			<Divider />
			<Grid container justifyContent='center'>
				<Grid item>
					<Link href='/auth/register' component={RouterLink}>{`No tienes una cuenta?, Registrate aqui`}</Link>
				</Grid>
			</Grid>
		</Box>
	)
}
