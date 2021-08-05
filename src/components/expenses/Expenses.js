import React, { useState } from 'react';
import './Expenses.css';
import ExpensesList from './ExpensesList';
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
			<ExpensesList items={expenses} />
		</Card>
	);
};

export default Expenses;
