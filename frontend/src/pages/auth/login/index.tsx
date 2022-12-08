
import * as React from 'react'
import AuthWrapper from '../../../components/auth/AuthWrapper'
import LoginForm from '../../../components/auth/LoginForm'

export default function LoginPage() {
	return (
		<AuthWrapper title='Iniciar sesión'>
			<LoginForm />
		</AuthWrapper>
	)
}
