import { Button, Link, Stack, TextField, Typography } from '@mui/material'
import * as React from'react'
import InputPassword from '../../components/misc/InputPassword'
import LockIcon from '@mui/icons-material/Lock'
import AuthFormWrapper from '../../components/auth/AuthFormWrapper'

export default function LoginPage() {
	const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
		event.preventDefault()
		const form = new FormData(event.currentTarget)
		console.log(form.get('email'))
		console.log(form.get('password'))
	}
	return (
		<AuthFormWrapper
			title='Bienvenido!'
			subtitle='Ingrese sus credenciales'
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
			<Stack spacing={1} component='form' sx={{ p: 2 }} onSubmit={handleSubmit}>
				<TextField size='small' required label='Correo' placeholder='juan@dominio.com' fullWidth name='email' />
				<InputPassword />
				<Button variant='contained' type='submit'>
					Iniciar sesión
				</Button>
			</Stack>
		</AuthFormWrapper>
	)
}
