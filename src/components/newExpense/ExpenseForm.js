import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {
	const [title, setTitle] = useState('');
	const [amount, setAmount] = useState('');
	const [date, setDate] = useState('');

	// const [userInputs, setUserInputs] = useState({
	// 	title: '',
	// 	amount: '',
	// 	date: '',
	// });

	const titleChangeHandler = (event) => {
		setTitle(event.target.value);
		// setUserInputs({
		// 	...userInputs,
		// 	title: event.target.value,
		// });

		// setUserInputs((prevState) => {
		// 	return {
		// 		...prevState,
		// 		title: event.target.value,
		// 	};
		// });
	};

	const amountChangeHandler = (event) => {
		setAmount(event.target.value);
		// setUserInputs({
		// 	...userInputs,
		// 	amount: event.target.value,
		// });
		// setUserInputs((prevState) => {
		// 	return {
		// 		...prevState,
		// 		amount: event.target.value,
		// 	};
		// });
	};
	const dateChangeHandler = (event) => {
		setDate(event.target.value);
		// setUserInputs({
		// 	...userInputs,
		// 	date: event.target.value,
		// });
		// setUserInputs((prevState) => {
		// 	return {
		// 		...prevState,
		// 		date: event.target.value,
		// 	};
		// });
	};

	return (
		<form action="" className="new-expense__controls">
			<div className="new-expense__control">
				<label htmlFor="title">Title</label>
				<input type="text" name="title" onChange={titleChangeHandler} />
			</div>
			<div className="new-expense__control">
				<label htmlFor="amount">Amount</label>
				<input type="number" name="amount" min="0.01" step="0.01" onChange={amountChangeHandler} />
			</div>
			<div className="new-expense__control">
				<label htmlFor="date">Date</label>
				<input type="date" name="date" min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler} />
			</div>
			<div className="new-expense__actions">
				<button type="submit">Add Expense</button>
			</div>
		</form>
	);
};

export default ExpenseForm;
