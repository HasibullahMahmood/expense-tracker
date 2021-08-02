import React from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) =>
{
	const saveEnteredExpensesHandler = (enteredExpenses) =>
	{
		const expense = {
			...enteredExpenses,
			id: Math.random().toString()
		}
		props.onAddExpense(expense)
	}
	return (
		<div className="new-expense">
			<ExpenseForm onSaveEnteredExpenses={ saveEnteredExpensesHandler}/>
		</div>
	);
};

export default NewExpense;
