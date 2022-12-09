import { IconButton, InputAdornment, TextField } from '@mui/material'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import * as React from 'react'


export default function InputPassword(props: any) {
  const [showPass, setShowPass] = React.useState(false)

  return (
    <TextField
      variant='outlined'
      type={showPass ? 'text' : 'password'}
      name='password'
      placeholder='Contraseña'
      // size='small'
      sx={{
        '& .MuiInputBase-root': {
          overflow: 'hidden',
          borderRadius: 1,
          backgroundColor: theme => (theme.palette.mode === 'light' ? '#fcfcfb' : '#2b2b2b'),
        },
        '& .MuiFormHelperText-root': {
          color: 'white',
        },
      }}
      InputProps={{
        endAdornment: (
          <InputAdornment position='end'>
            <IconButton sx={{ p: 0 }} onClick={() => setShowPass(prev => !prev)}>
              {showPass ? <VisibilityOffIcon /> : <VisibilityIcon />}
            </IconButton>
          </InputAdornment>
        ),
      }}
      {...props}
    // helperText='Minimo 8 caracteres'
    />
  )
}
