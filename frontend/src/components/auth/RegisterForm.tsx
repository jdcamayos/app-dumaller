import { Box, Button, Divider, Grid, Link, TextField, Typography } from '@mui/material'
import RouterLink from 'next/link'
import * as React from 'react'
import useAuth from '../../hooks/useAuth'
import InputPassword from './InputPassword'
import { useFormik } from 'formik'
import InputRadioOptions from '../misc/InputRadioOptions'
import * as Yup from 'yup'

const radioOptions = [
	{
		label: 'Dropshipper',
		name: 'dropshipper',
	},
	{
		label: 'Proveedor',
		name: 'provider',
	},
]

const registerValidation = Yup.object({
	surname: Yup.string().required('Apellidos requeridos'),
	name: Yup.string().required('Nombres requeridos'),
	phone: Yup.string().required('Telefono requerido'),
	email: Yup.string().required('Correo requerido'),
	password: Yup.string().required('Contraseña es obligatoria'),
	repeatPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Las contraseñas no coinciden'),
	role: Yup.string().required('Rol es requerido')
})

export default function RegisterForm() {
	const { signUp, loading } = useAuth()
	const formik = useFormik({
		initialValues: {
			surname: '',
			name: '',
			phone: '',
			email: '',
			password: '',
			repeatPassword: '',
			role: 'dropshipper'
		},
		validationSchema: registerValidation,
		onSubmit: async (values) => {
			const { repeatPassword, ...credentials } = values
			await signUp(credentials)
		}
	})

	return (
		<Box component='form' noValidate onSubmit={formik.handleSubmit} sx={{ mt: 3 }}>
			<Grid container spacing={2}>
				<Grid item xs={12}>
					<TextField
						size='small'
						onChange={formik.handleChange}
						value={formik.values.surname}
						error={!!formik.errors.surname}
						required
						fullWidth
						label='Apellidos'
						name='surname'
						helperText={formik.errors.surname}
					/>
				</Grid>
				<Grid item xs={12}>
					<TextField
						size='small'
						onChange={formik.handleChange}
						value={formik.values.name}
						error={!!formik.errors.name}
						required
						fullWidth
						label='Nombres'
						name='name'
						helperText={formik.errors.name}
					/>
				</Grid>
				<Grid item xs={12}>
					<TextField
						size='small'
						onChange={formik.handleChange}
						value={formik.values.phone}
						error={!!formik.errors.phone}
						required
						fullWidth
						label='Teléfono'
						name='phone'
						helperText={formik.errors.phone}
					/>
				</Grid>
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
					<InputPassword
						size='small'
						onChange={formik.handleChange}
						value={formik.values.repeatPassword}
						error={!!formik.errors.repeatPassword}
						required
						fullWidth
						name='repeatPassword'
						helperText={formik.errors.repeatPassword}
						label='Repite tu contraseña'
						autoComplete='new-password'
					/>
				</Grid>
				<Grid item xs={12}>
					<InputRadioOptions name='role' onChange={formik.handleChange} value={formik.values.role} options={radioOptions} />
				</Grid>
			</Grid>
			<Typography>{formik.errors.role}</Typography>
			<Button type='submit' fullWidth variant='contained' sx={{ mt: 3, mb: 2 }}>
				{loading ? 'Cargando' : 'Registrate'}
			</Button>
			<Divider />
			<Grid container justifyContent='center'>
				<Grid item>
					<Link href='/auth/login' component={RouterLink}>
						Ya tienes una cuenta, Inicia sesión aqui.
					</Link>
				</Grid>
			</Grid>
		</Box>
	)
}
