import React, { forwardRef } from 'react'
import { Input } from './Input'
import './FormInput.css'

const FormInput = forwardRef(
	(
		{
			inputType = 'text',
			onChange,
			label,
			id,
			value,
			containerClassName,
			error,
			...rest
		},
		ref,
	) => {
		return (
			<div className={containerClassName}>
				<label className='label' htmlFor={id}>
					{label}
				</label>
				<Input
					id={id}
					type={inputType}
					value={value}
					onChange={onChange}
					ref={ref}
					error={error}
					{...rest}
				/>
			</div>
		)
	},
)

export default FormInput
