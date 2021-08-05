import React, { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
	const [showExpenseForm, setShowExpenseForm] = useState(false);

	const saveEnteredExpensesHandler = (enteredExpenses) => {
		const expense = {
			...enteredExpenses,
			id: Math.random().toString(),
		};
		props.onAddExpense(expense);
	};

	const onAddNewExpenseBtn = () => {
		setShowExpenseForm(true);
	};

	const cancelBtnHandler = () => {
		setShowExpenseForm(false);
	};
	return (
		<div className="new-expense">
			{showExpenseForm ? (
				<ExpenseForm onSaveEnteredExpenses={saveEnteredExpensesHandler} onCancelBtn={cancelBtnHandler} />
			) : (
				<button onClick={onAddNewExpenseBtn}>Add New Expense</button>
			)}
		</div>
	);
};

export default NewExpense;
