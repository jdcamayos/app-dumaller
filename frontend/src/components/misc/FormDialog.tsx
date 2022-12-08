import * as React from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import { RFC } from '../../types'

interface Props extends RFC {
	title: string
	openButtonText: string
	cancelButtonText: string
	okButtonText: string
	okAction: () => void
}

export default function FormDialog(props: Props) {
	const [open, setOpen] = React.useState(false)

	const handleClickOpen = () => {
		setOpen(true)
	}

	const handleClose = () => {
		setOpen(false)
	}

	const handleOk = () => {
		setOpen(false)
		props.okAction()
	}

	return (
		<>
			<Button variant='contained' onClick={handleClickOpen}>
				{props.openButtonText}
			</Button>
			<Dialog open={open} onClose={handleClose}>
				<DialogTitle>{props.title}</DialogTitle>
				<DialogContent>{props.children}</DialogContent>
				<DialogActions sx={{ mr: 2 }}>
					<Button color='error' onClick={handleClose}>
						{props.cancelButtonText}
					</Button>
					<Button variant='contained' onClick={handleOk}>
						{props.okButtonText}
					</Button>
				</DialogActions>
			</Dialog>
		</>
	)
}
