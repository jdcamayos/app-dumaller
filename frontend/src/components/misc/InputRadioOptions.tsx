import * as React from 'react'
import FormControl from '@mui/material/FormControl'
import FormControlLabel from '@mui/material/FormControlLabel'
import Radio from '@mui/material/Radio'
import RadioGroup, { RadioGroupProps } from '@mui/material/RadioGroup'


interface Option {
	label: string
	name: string
}

interface Props {
	options: Option[]
	name: string
	onChange: RadioGroupProps['onChange']
	value: string
}

export default function InputRadioOptions(props: Props) {
	const { options } = props

	return (
		<FormControl fullWidth>
			<RadioGroup
				name={props.name}
				value={props.value}
				onChange={props.onChange}
				row
				sx={{ display: 'flex', justifyContent: 'center' }}
			>
				{options.map(option => (
					<FormControlLabel key={option.name} value={option.name} control={<Radio />} label={option.label} />
				))}
			</RadioGroup>
		</FormControl>
	)
}
