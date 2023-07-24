import React, { forwardRef } from 'react'
import './Input.css'
import { styled } from '@mui/material'

export const Input = forwardRef(
	({ type, value, onChange, error, ...rest }, ref) => {
		return (
			<StyledInput
				value={value}
				onChange={onChange}
				type={type}
				ref={ref}
				error={error}
				{...rest}
			/>
		)
	},
)

const StyledInput = styled('input')`
	font: inherit;
	padding: 0.5rem;
	border-radius: 6px;
	border: 1px solid ${(p) => !p.error ? "red" : "#ccc"};
	width: 20rem;
	max-width: 100%
`
