import { Auth } from '../types'
import { SignInDto, SignUpDto } from '../types'
import * as React from 'react'
import * as services from '../services'
import { useRouter } from 'next/router'

interface AuthContextType {
	auth: Auth | null
	loading: boolean
	signIn: (credentials: SignInDto) => void
	signUp: (credentials: SignUpDto) => void
	signWithProvider: (provider: 'google') => void
	signOut: () => void
}

const authContextInitialState: AuthContextType = {} as AuthContextType

export const AuthContext = React.createContext<AuthContextType>(authContextInitialState)

const authInitialState = null

interface Props {
	children: React.ReactNode | React.ReactNode[]
}

export default function AuthProvider(props: Props) {
	const [auth, setAuth] = React.useState<Auth | null>(authInitialState)
	const [loading, setLoading] = React.useState(true)
	// Hooks
	const { push, pathname } = useRouter()

	React.useEffect(() => {
		const unsubscribe = services.sessionObserver(setAuth, setLoading)
		return () => unsubscribe()
	}, [])

	React.useEffect(() => {
		// console.log('loading', loading)
		// console.log('auth', auth)
		verifySession()
	}, [loading, auth])

	// Protected Routes
	const verifySession = () => {
		// Validate if user session doesn't exists
		if (!loading && !auth) push('/auth/login')
		// Validate if user try to go to auth routes
		if (!loading && !!auth && !!auth.uid && pathname.includes('auth')) push('/')
	}

	const signIn = async (credentials: SignInDto) => {
		try {
			setLoading(true)
			const user = await services.signIn(credentials)
			setAuth(user)
		} catch (error) {
			console.error(error)
		} finally {
			setLoading(false)
		}
	}

	const signUp = async (credentials: SignUpDto) => {
		try {
			setLoading(true)
			console.log(credentials)
			const user = await services.signUp(credentials)
			setAuth(user)
		} catch (error) {
			console.error(error)
		} finally {
			setLoading(false)
		}
	}

	const signWithProvider = async (provider: 'google') => {
		try {
			setLoading(true)
			let user = null
			if (provider === 'google') user = await services.signWithGoogle()
			setAuth(user)
		} catch (error) {
			console.error(error)
		} finally {
			setLoading(false)
		}
	}

	const signOut = async () => {
		try {
			setLoading(true)
			await services.signOut()
			setAuth(null)
		} catch (error) {
			console.error(error)
		} finally {
			setLoading(false)
		}
	}

	return (
		<AuthContext.Provider value={{ auth, loading, signIn, signUp, signWithProvider, signOut }}>
			{props.children}
		</AuthContext.Provider>
	)
}
