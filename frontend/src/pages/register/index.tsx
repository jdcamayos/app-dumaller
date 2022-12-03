import * as React from 'react'
import { Button, Link, Stack, TextField, Typography } from '@mui/material'
import InputPassword from '../../components/misc/InputPassword'
import LockIcon from '@mui/icons-material/Lock'
import AuthFormWrapper from '../../components/auth/AuthFormWrapper'
import InputRadioOptions from '../../components/misc/InputRadioOptions'

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

export default function RegisterPage() {
	const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
		event.preventDefault()
		const form = new FormData(event.currentTarget)
		console.log(form.get('email'))
		console.log(form.get('password'))
	}
	return (
		<AuthFormWrapper
			title='Registrarme'
			subtitle='Complete el siguiente formulario para crear una nueva cuenta en Dumaller'
			icon={<LockIcon />}
			links={
				<>
					<Typography align='center' variant='body2'>
						No tienes una cuenta? <Link>Crear nueva cuenta</Link>
					</Typography>
					<Typography align='center' variant='body2'>
						<Link>Olvido su contraseña</Link>
					</Typography>
				</>
			}
		>
			<Stack spacing={2} component='form' sx={{ p: 2 }} onSubmit={handleSubmit}>
				<TextField size='small' required label='Apellidos' placeholder='juan@dominio.com' fullWidth name='surname' />
				<TextField size='small' required label='Nombres' placeholder='juan@dominio.com' fullWidth name='name' />
				<TextField size='small' required label='Telefono' placeholder='juan@dominio.com' fullWidth name='phone' />
				<TextField size='small' required label='Correo' placeholder='juan@dominio.com' fullWidth name='email' />
				<InputPassword />
				<InputPassword />
				<InputRadioOptions options={radioOptions} />
				<Button variant='contained' type='submit'>
					Crear cuenta
				</Button>
			</Stack>
		</AuthFormWrapper>
	)
}
