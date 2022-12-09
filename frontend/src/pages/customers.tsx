import { Box, Divider, IconButton, Paper, Stack, Typography } from '@mui/material'
import * as React from 'react'
import useApp from '../hooks/useApp'

export default function Customers() {
  return (
    <Paper>
      <Stack direction='row' justifyContent='space-between' alignItems='center' sx={{ p: 2 }}>
        <Typography>
          Clientes
        </Typography>
      </Stack>
      <Divider />
      <Box sx={{ p: 2 }}>
        {/* {users.map(user => (<Typography key={user.id}>{user.name}</Typography>))} */}
      </Box>
    </Paper>
  )
}
