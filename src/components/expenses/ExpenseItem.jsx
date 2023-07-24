import React, { useState } from 'react'
import Card from '../UI/card/Card'
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'
import Button from '../UI/button/Button'
import Modal from '../UI/modal/Modal'
import ExpenseForm from '../new-expense/ExpenseForm'

const ExpenseItem = ({ date, title, amount, onDeleteExpense, id }) => {
	const [isModalVisible, setIsModalVisible] = useState(false)

	const [isEditModalVisible, setIsEditModalVisible] = useState(false)

	const toggleModalVisibilityHandler = () => {
		setIsModalVisible((prevState) => !prevState)
	}

	const toggleEditModalVisibilityHandler = () => {
		setIsEditModalVisible((prevState) => !prevState)
	}

	return (
		<>
			<Card className='expense-item'>
				<ExpenseDate date={date} />
				<div className='expense-item__description'>
					<h2>{title}</h2>
					<div className='expense-item__price'>${amount}</div>{' '}
				</div>
				<Button
					style={{ marginLeft: '1rem' }}
					onClick={toggleModalVisibilityHandler}
				>
					Delete
				</Button>
				<Button
					style={{ marginLeft: '1rem' }}
					onClick={toggleEditModalVisibilityHandler}
				>
					Edit
				</Button>
			</Card>
			{isModalVisible ? (
				<Modal onClose={toggleModalVisibilityHandler}>
					<h3>Вы уверены что хотите удалить этот расход?</h3>
					<Button onClick={() => onDeleteExpense(id)}>ДА</Button>
					<Button
						bgColor={'light'}
						onClick={toggleModalVisibilityHandler}
					>
						НЕТ
					</Button>
				</Modal>
			) : null}
			{isEditModalVisible && (
				<Modal onClose={toggleEditModalVisibilityHandler}>
					<ExpenseForm
						onCloseForm={toggleEditModalVisibilityHandler}
					/>
				</Modal>
			)}
		</>
	)
}

export default ExpenseItem
