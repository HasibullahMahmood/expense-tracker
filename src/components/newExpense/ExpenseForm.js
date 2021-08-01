import React from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {
	return (
		<form action="" className="new-expense__controls">
			<div className="new-expense__control">
				<label htmlFor="title">Title</label>
				<input type="text" name="title" />
			</div>
			<div className="new-expense__control">
				<label htmlFor="amount">Amount</label>
				<input type="number" name="amount" min="0.01" step="0.01" />
			</div>
			<div className="new-expense__control">
				<label htmlFor="date">Date</label>
				<input type="date" name="date" />
			</div>
			<div className="new-expense__actions">
				<button type="submit">Add Expense</button>
			</div>
		</form>
	);
};

export default ExpenseForm;
