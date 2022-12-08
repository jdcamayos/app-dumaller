import { AuthContext } from '../contexts/AuthContext'
import * as React from 'react'

export default function useAuth() {
	const context = React.useContext(AuthContext)
	if (context === undefined) throw new Error('This hook must be into AuthProvider')

	return context
}
