import * as React from 'react'
import { AppContext } from '../contexts/AppContext'

export default function useApp() {
	const context = React.useContext(AppContext)

	if (!context) throw new Error('You must be envolve in AppContext')

	return context
}
