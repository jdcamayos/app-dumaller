import { RFC } from '../../types'
import Dashboard from './Dashboard'

export default function Layout(props: RFC) {
	return <Dashboard>{props.children}</Dashboard>
}
