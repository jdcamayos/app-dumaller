import * as React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook'
import GoogleIcon from '@mui/icons-material/Google'
import Stack from '@mui/material/Stack'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import TwitterIcon from '@mui/icons-material/Twitter'

interface Props {
	signWithProvider: (provider: 'google') => void
}

export default function AuthWithProvider(props: Props) {
	const { signWithProvider } = props
	return (
		<Stack
			direction='row'
			divider={<Divider orientation='vertical' flexItem />}
			spacing={2}
			justifyContent='space-around'
			sx={{ marginX: 2, marginTop: 1, marginBottom: 3 }}
		>
			<IconButton>
				<FacebookIcon />
			</IconButton>
			<IconButton onClick={() => signWithProvider('google')}>
				<GoogleIcon />
			</IconButton>
			<IconButton>
				<TwitterIcon />
			</IconButton>
		</Stack>
	)
}
