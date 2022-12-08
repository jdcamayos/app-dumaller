import * as React from 'react'
import useAuth from '../../hooks/useAuth'
import { RFC } from '../../types'
import Loading from '../misc/Loading'

export default function AuthLoading(props: RFC) {
	const { loading } = useAuth()

	if (loading) return <Loading isPage={true} />

	return <>{props.children}</>
}
