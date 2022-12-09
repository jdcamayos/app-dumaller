import * as React from 'react'
import useAuth from '../hooks/useAuth'
import * as services from '../services'
import { RFC, User } from '../types'

interface State {
	user: User | null
	userLoading: boolean
	users: User[]
	usersLoading: boolean
}

interface AppContextType {
	state: State,
	getUsers: () => Promise<void>
}

const initialState: State = {
	user: null,
	userLoading: false,
	users: [],
	usersLoading: false,
}

export const AppContext = React.createContext({} as AppContextType)

type ActionType =
	| { type: 'SET_USER'; payload: User | null }
	| { type: 'SET_USER_LOADING'; payload: boolean }
	| { type: 'SET_USERS'; payload: User[] }
	| { type: 'SET_USERS_LOADING'; payload: boolean }

const actionMap = new Map([
	['SET_USER', (state: State, payload: any) => ({ ...state, user: payload })],
	['SET_USER_LOADING', (state: State, payload: any) => ({ ...state, userLoading: payload })],
	['SET_USERS', (state: State, payload: any) => ({ ...state, users: payload })],
	['SET_USERS_LOADING', (state: State, payload: any) => ({ ...state, usersLoading: payload })],
])

const reducer = (state: State, action: ActionType) => {
	const mappedAction = actionMap.get(action.type)
	return mappedAction ? mappedAction(state, action.payload) : state
}

export default function AppProvider(props: RFC) {
	const [state, dispatch] = React.useReducer(reducer, initialState)
	const { auth } = useAuth()

	React.useEffect(() => {
		if (!!auth && !state.user) {
			getUser(auth.uid)
		}
		if (!!auth && !!state.user && auth.uid !== state.user.id) {
			getUser(auth.uid)
		}
	}, [auth])

	const getUser = async (userId: User['id']) => {
		try {
			dispatch({ type: 'SET_USER_LOADING', payload: true })
			const user = await services.getUser(userId)
			dispatch({ type: 'SET_USER', payload: user })
		} catch (error) {

		} finally {
			dispatch({ type: 'SET_USER_LOADING', payload: false })
		}
	}

	const getUsers = async () => {
		try {
			dispatch({ type: 'SET_USERS_LOADING', payload: true })
			const users = await services.getUsers()
			dispatch({ type: 'SET_USERS', payload: users })
		} catch (error) {

		} finally {
			dispatch({ type: 'SET_USERS_LOADING', payload: false })
		}
	}

	const value: AppContextType = { state, getUsers }

	return <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
}
