import React from 'react'
import { css, styled } from 'styled-components'
// import { styled } from 'styled-components'

const Button = ({
	children,
	onClick,
	color,
	bgColor,
	size = 'default',
	...rest
}) => {
	return (
		<StyledButton
			color={color}
			bgColor={bgColor}
			onClick={onClick}
			size={size}
			{...rest}
		>
			{children}
		</StyledButton>
	)
}

const COLORS_VARIANTS = {
	primary: 'blue',
	light: 'white',
	dark: 'black',
}

const BACKGROUND_VARIANTS = {
	primary: {
		default: '#4a026b',
		hover: '#510674',
		active: '#510674',
	},
	light: {
		default: '#fafafa',
		hover: '#f1d9fb',
		active: '#e9b8ff',
	},
	dark: {
		default: '#2a0046',
		hover: '#250136',
		active: '#110119',
	},
}

const BUTTON_SIZES = {
	small: '12px',
	medium: '14px',
	default: '16px',
	large: '18px',
}

const getColor = (props) => {
	return COLORS_VARIANTS[props.color || 'light']
}

const getBackgroundColor = (props) => {
	const currentVariant = BACKGROUND_VARIANTS[props.bgColor || 'primary']
	return css`
		background-color: ${currentVariant.default};
		&:hover:not(:disabled) {
			background-color: ${currentVariant.hover};
		}
		&:active:not(:disabled) {
			background-color: ${currentVariant.active};
		}
	`
}

const StyledButton = styled('button')`
	height: 51px;
	padding: 16px 18px 16px 18px;
	border-radius: 10px;
	color: ${getColor};
	outline: none;
	border: none;
	cursor: pointer;
	&:disabled {
		background-color: grey;
	}
	font-size: ${({ size }) => BUTTON_SIZES[size]};
	${getBackgroundColor};
`

export default Button
