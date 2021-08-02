import React, { useState } from 'react';
import './Expenses.css';
import ExpenseItem from '../expenseItem/ExpenseItem';
import Card from '../card/Card';
import ExpensesFilter from './ExpensesFilter';

const Expenses = () => {
	const [year, setYear] = useState('2020');
	const expenses = [
		{
			id: 'e1',
			title: 'Toilet Paper',
			amount: 94.12,
			date: new Date(2020, 7, 14),
		},
		{ id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
		{
			id: 'e3',
			title: 'Car Insurance',
			amount: 294.67,
			date: new Date(2021, 2, 28),
		},
		{
			id: 'e4',
			title: 'New Desk (Wooden)',
			amount: 450,
			date: new Date(2021, 5, 12),
		},
	];
	const selectYearHandler = (selectedYear) => {
		setYear(selectedYear);
		console.log(selectedYear);
	};
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
