import { Button, Grid, Paper, TextField, Typography } from '@mui/material'
import { useFormik } from 'formik'
import React from 'react'
import InputRadioOptions from '../misc/InputRadioOptions'

const radioOptions = [
  {
    label: 'Con recaudo',
    name: 'true',
  },
  {
    label: 'Sin recaudo',
    name: 'false',
  },
]

export default function DeliveryCalculator() {

  const formik = useFormik({
    initialValues: {
      mount: 0,
      stateOrigin: '',
      cityOrigin: '',
      stateDestiny: '',
      cityDestiny: '',
      surcharge: 'true',
    },
    onSubmit: (values) => {
      console.log(values)
    }
  })

  return (
    <Paper sx={{ p: 2 }}>
      <Typography sx={{ mb: 2 }} align='center' fontWeight={600} variant='h6' component='h3'>
        Cotizador de fletes
      </Typography>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <TextField type='number' name='mount' value={formik.values.mount} onChange={formik.handleChange} label='Monto' fullWidth inputProps={{ shrink: true }} />
        </Grid>
        <Grid item xs={6}>
          <TextField name='stateOrigin' value={formik.values.stateOrigin} onChange={formik.handleChange} label='Departamento de origen' fullWidth inputProps={{ shrink: true }} />
        </Grid>
        <Grid item xs={6}>
          <TextField name='cityOrigin' value={formik.values.cityOrigin} onChange={formik.handleChange} label='Ciudad de origen' fullWidth inputProps={{ shrink: true }} />
        </Grid>
        <Grid item xs={6}>
          <TextField name='stateDestiny' value={formik.values.stateDestiny} onChange={formik.handleChange} label='Departamento de destino' fullWidth inputProps={{ shrink: true }} />
        </Grid>
        <Grid item xs={6}>
          <TextField name='cityDestiny' value={formik.values.cityDestiny} onChange={formik.handleChange} label='Ciudad de destino' fullWidth inputProps={{ shrink: true }} />
        </Grid>
        <Grid item xs={12}>
          <InputRadioOptions options={radioOptions} name='surcharge' onChange={formik.handleChange} value={formik.values.surcharge} />
        </Grid>
        <Grid item xs={12} justifyContent=''>
          <Button type='submit' variant='contained' fullWidth>Cotizar</Button>
        </Grid>
      </Grid>
    </Paper>
  )
}
