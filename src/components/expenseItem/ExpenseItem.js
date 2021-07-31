import React, { useState } from 'react';
import './ExpenseItem.css';
import ExpenseDate from '../expenseDate/ExpenseDate';
import Card from '../card/Card';

const ExpenseItem = (props) => {
	const { date, amount } = props.expenseObj;
	const [title, setTitle] = useState(props.expenseObj.title);
	const clickHandler = () => {
		setTitle('Updated!');
	};
	return (
		<Card className="expense-item">
			<ExpenseDate date={date} />
			<div className="expense-item__description">
				<h2>{title}</h2>
				<div className="expense-item__price">${amount}</div>
			</div>
			<button onClick={clickHandler}>Change Title</button>
		</Card>
	);
};

export default ExpenseItem;
