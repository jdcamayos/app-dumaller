import * as React from 'react'
import HomeIcon from '@mui/icons-material/Home'
import SearchIcon from '@mui/icons-material/Search'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import SwitchAccountIcon from '@mui/icons-material/SwitchAccount'
import StoreIcon from '@mui/icons-material/Store'
import HistoryIcon from '@mui/icons-material/History'
import PeopleIcon from '@mui/icons-material/People'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import SettingsIcon from '@mui/icons-material/Settings'
import TodayIcon from '@mui/icons-material/Today'
import CampaignIcon from '@mui/icons-material/Campaign'
import LeaderboardIcon from '@mui/icons-material/Leaderboard'
import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { useRouter } from 'next/router'

interface Item {
	id: string
	icon: React.ReactNode
	label: string
	href: string
	subitems: null | []
}

const sidebarItems: Item[] = [
	{
		id: 'home',
		icon: <HomeIcon />,
		label: 'Inicio',
		href: '/',
		subitems: null,
	},
	{
		id: 'search-products',
		icon: <SearchIcon />,
		label: 'Buscar productos',
		href: '/search-products',
		subitems: null,
	},
	{
		id: 'favorites',
		icon: <FavoriteIcon />,
		label: 'Lista de favoritos',
		href: '/favorites',
		subitems: null,
	},
	{
		id: 'my-orders',
		icon: <ShoppingCartIcon />,
		label: 'Mis ordenes',
		href: '/my-orders',
		subitems: [],
	},
	{
		id: 'customers',
		icon: <SwitchAccountIcon />,
		label: 'Clientes',
		href: '/customers',
		subitems: null,
	},
	{
		id: 'my-stores',
		icon: <StoreIcon />,
		label: 'Mis tiendas',
		href: '/my-stores',
		subitems: null,
	},
	{
		id: 'wallet-history',
		icon: <HistoryIcon />,
		label: 'Historial de cartera',
		href: '/wallet-history',
		subitems: null,
	},
	{
		id: 'my-users',
		icon: <PeopleIcon />,
		label: 'Mis usuarios',
		href: '/my-users',
		subitems: null,
	},
	{
		id: 'my-refers',
		icon: <PersonAddIcon />,
		label: 'Mis referidos',
		href: '/my-refers',
		subitems: null,
	},
	{
		id: 'settings',
		icon: <SettingsIcon />,
		label: 'Configuraciones',
		href: '/settings',
		subitems: [],
	},
	{
		id: 'calendar',
		icon: <TodayIcon />,
		label: 'Calendario',
		href: '/calendar',
		subitems: null,
	},
	{
		id: 'marketing',
		icon: <CampaignIcon />,
		label: 'Marketing',
		href: '/marketing',
		subitems: [],
	},
	{
		id: 'reports',
		icon: <LeaderboardIcon />,
		label: 'Reportes',
		href: '/reports',
		subitems: [],
	},
]

export default function SidebarItems() {
	const { pathname, push } = useRouter()

	const handleClick = (item: Item) => {
		if (!pathname.includes(item.href)) {
			push(item.href)
		}
	}

	return (
		<>
			{sidebarItems.map(item => (
				<ListItemButton
					key={item.id}
					onClick={() => handleClick(item)}
					sx={{
						...(pathname.includes(item.href) && {
							color: 'white',
							bgcolor: 'primary.main',
							'&:hover': { color: 'primary.main' },
						}),
					}}
				>
					<ListItemIcon sx={{ ...(pathname.includes(item.href) && { color: 'inherit' }) }}>{item.icon}</ListItemIcon>
					<ListItemText primary={item.label} />
				</ListItemButton>
			))}
		</>
	)
}
