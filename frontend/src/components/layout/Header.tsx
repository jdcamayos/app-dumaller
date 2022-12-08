import * as React from 'react'
import AdbIcon from '@mui/icons-material/Adb'
import AppBar from '@mui/material/AppBar'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import BrandName from '../misc/BrandName'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Stack from '@mui/material/Stack'
import ThemeButton from './ThemeButton'
import Toolbar from '@mui/material/Toolbar'
import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'
import useAuth from '../../hooks/useAuth'

export default function Header() {
	const { auth, signOut } = useAuth()
	const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null)
	const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null)

	const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElUser(event.currentTarget)
	}

	const handleCloseUserMenu = () => {
		setAnchorElUser(null)
	}

	const handleLogout = () => {
		signOut()
	}

	if (!auth) return null

	return (
		<>
			<AppBar position='fixed'>
				<Container maxWidth='lg'>
					<Stack direction='row' sx={{ width: '100%', py: 1 }} justifyContent='space-between' alignItems='center'>
						<BrandName />
						<Box sx={{ flexGrow: 0 }}>
							<ThemeButton />
							<Tooltip title={auth.email}>
								<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
									{/* <Avatar alt='Remy Sharp' src='/static/images/avatar/2.jpg' /> */}
									<Avatar sx={{ bgcolor: 'primary.main', color: 'white', border: `2px solid white` }}>
										{auth.email?.split('')[0].toLocaleUpperCase()}
									</Avatar>
								</IconButton>
							</Tooltip>
							<Menu
								sx={{ mt: '45px' }}
								id='menu-appbar'
								anchorEl={anchorElUser}
								anchorOrigin={{
									vertical: 'top',
									horizontal: 'right',
								}}
								keepMounted
								transformOrigin={{
									vertical: 'top',
									horizontal: 'right',
								}}
								open={Boolean(anchorElUser)}
								onClose={handleCloseUserMenu}
							>
								<MenuItem>
									<Typography textAlign='center'>{auth.email}</Typography>
								</MenuItem>
								<Divider />
								<MenuItem onClick={handleLogout}>
									<Typography textAlign='center'>Cerrar sesión</Typography>
								</MenuItem>
								{/* {settings.map(setting => (
								<MenuItem key={setting} onClick={handleCloseUserMenu}>
									<Typography textAlign='center'>{setting}</Typography>
									<Typography textAlign='center'>{setting}</Typography>
								</MenuItem>
							))} */}
							</Menu>
						</Box>
					</Stack>
				</Container>
			</AppBar>
			<Toolbar />
		</>
	)
}
