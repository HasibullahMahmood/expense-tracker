import React, { useState } from 'react';
import './Expenses.css';
import ExpenseItem from '../expenseItem/ExpenseItem';
import Card from '../card/Card';
import ExpensesFilter from './ExpensesFilter';

const Expenses = ({ expenses }) => {
	const [year, setYear] = useState('2020');

	const selectYearHandler = (selectedYear) => {
		setYear(selectedYear);
	};

	expenses = expenses.filter((expense) => {
		return new Date(expense.date).getFullYear() === +year;
	});
	return (
		<Card className="expenses">
			<ExpensesFilter onSelectYear={selectYearHandler} selectedYear={year} />
			{expenses.map((expense) => {
				return <ExpenseItem expenseObj={expense} key={expense.id} />;
			})}
		</Card>
	);
};

export default Expenses;
