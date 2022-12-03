import { Visibility, VisibilityOff } from '@mui/icons-material'
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from '@mui/material'
import * as React from 'react'

export default function InputPassword() {
	const [value, setValue] = React.useState('')
	const [show, setShow] = React.useState(false)

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setValue(event.target.value)
	}

	const handleShowPassword = () => {
		setShow(prev => !prev)
	}

	const handleHiddenPassword = () => {
		setShow(false)
	}

	return (
		<FormControl variant='outlined' fullWidth size='small'>
			<InputLabel htmlFor='outlined-adornment-password'>Password</InputLabel>
			<OutlinedInput
				id='outlined-adornment-password'
				type={show ? 'text' : 'password'}
				value={value}
				name={'password'}
				onChange={handleChange}
				endAdornment={
					<InputAdornment position='end'>
						<IconButton
							aria-label='toggle password visibility'
							onClick={handleShowPassword}
							onMouseDown={handleHiddenPassword}
							edge='end'
						> 
							{show ? <VisibilityOff /> : <Visibility />}
						</IconButton>
					</InputAdornment>
				}
				label='Password'
			/>
		</FormControl>
	)
}
