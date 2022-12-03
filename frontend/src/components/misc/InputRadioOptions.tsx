import * as React from 'react'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'

interface Option {
	label: string
	name: string
}

interface Props {
	options: Option[]
}

export default function InputRadioOptions(props: Props) {
	const { options } = props

	return (
		<FormControl fullWidth>
			{/* <FormLabel id='demo-row-radio-buttons-group-label'>Gender</FormLabel> */}
			<RadioGroup
				row
				aria-labelledby='demo-row-radio-buttons-group-label'
				name='row-radio-buttons-group'
				sx={{ display: 'flex', justifyContent: 'center' }}
			>
				{options.map(option => (
					<FormControlLabel key={option.name}  value={option.name} control={<Radio />} label={option.label} />
				))}
			</RadioGroup>
		</FormControl>
	)
}
