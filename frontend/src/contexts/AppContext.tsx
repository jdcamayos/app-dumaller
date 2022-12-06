import * as React from 'react'
import { RFC } from '../types'

interface AppContextType {
	state: State
}

const AppContext = React.createContext({} as AppContextType)

interface State {
	auth: boolean
}

const initialState: State = {
	auth: true,
}

type ActionType =
	| { type: 'LOGIN'; payload: boolean }
	| { type: 'REGISTER'; payload: boolean }
	| { type: 'LOGOUT'; payload: boolean }

const actionMap = new Map([
	['LOGIN', (state: State, payload?: boolean) => ({ ...state, auth: true })],
	['REGISTER', (state: State, payload?: boolean) => ({ ...state, auth: true })],
	['LOGOUT', (state: State, payload?: boolean) => ({ ...state, auth: false })],
])

const reducer = (state: State, action: ActionType) => {
	const mappedAction = actionMap.get(action.type)
	return mappedAction ? mappedAction(state, action.payload) : state
}

export default function AppProvider(props: RFC) {
	const [state, dispatch] = React.useReducer(reducer, initialState)

	const value: AppContextType = { state }

	return <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
}
