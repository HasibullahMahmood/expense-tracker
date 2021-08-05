import React from 'react';
import ExpenseItem from '../expenseItem/ExpenseItem';
import './ExpensesList.css';

const ExpensesList = (props) => {
	if (props.items.length === 0) {
		return <p className="expenses-list__fallback">Found no expenses.</p>;
	}
	return (
		<ul className="expenses-list">
			{props.items.map((expense) => {
				return <ExpenseItem expenseObj={expense} key={expense.id} />;
			})}
		</ul>
	);
};

export default ExpensesList;
