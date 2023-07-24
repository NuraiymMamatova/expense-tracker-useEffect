import React from 'react'
import { styled } from 'styled-components'
import ReactDOM from 'react-dom'

const modalRoot = document.getElementById('modals')

const Modal = ({ onClose, children }) => {
	return ReactDOM.createPortal(
		<>
			<Backdrop onClick={onClose} />
			<StyledContainer>{children}</StyledContainer>
		</>,
		modalRoot,
	)
}

const Backdrop = styled('div')`
	position: fixed;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);
	top: 0;
	left: 0;
`

const StyledContainer = styled('div')`
	min-width: 400px;
	min-height: 300px;
	padding: 1rem;
	background-color: #f3ffd3;
	border-radius: 1rem;
	position: fixed;
	z-index: 2;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	padding: 1.5rem 1rem;
	display: flex;
	gap: 20px;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`

export default Modal
