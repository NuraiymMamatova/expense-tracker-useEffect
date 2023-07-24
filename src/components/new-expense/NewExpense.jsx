import React, { useState } from 'react'
import Button from '../UI/button/Button'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'
import { styled } from 'styled-components'

const NewExpense = ({ onAddNewExpense }) => {
	const [isFormShow, setIsFormShow] = useState(false)

	const showFormHandler = () => {
		setIsFormShow(true)
	}
	const closeFormHandler = () => setIsFormShow(false)

	return (
		<div className='new-expense'>
			{isFormShow ? (
				<ExpenseForm
					onAddNewExpense={onAddNewExpense}
					onCloseForm={closeFormHandler}
				/>
			) : (
				<StyledButton size='large' onClick={showFormHandler}>
					Добавить новый расход
				</StyledButton>
			)}
		</div>
	)
}
const StyledButton = styled(Button)`
	padding: 12px 16px;
	border-radius: 1rem;
`

export default NewExpense
