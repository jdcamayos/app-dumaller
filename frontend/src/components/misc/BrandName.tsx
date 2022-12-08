import Typography from '@mui/material/Typography'
import RouterLink from 'next/link'
import Link from '@mui/material/Link'
// import Image from 'next/image'
import { useTheme } from '@mui/material/styles'

export default function BrandName(props: any) {
	const { palette } = useTheme()
	return (
		<Link href='/' component={RouterLink} {...props}>
			{/* <Typography fontWeight={600} sx={{ color: theme => theme.palette.mode === 'light' ? 'black' : 'white' }}>TransfiYA!</Typography> */}
			<Typography fontWeight={600} sx={{ color: 'white' }}>
				Dumaller
			</Typography>
		</Link>
	)
}
