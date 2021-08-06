import React, { useState } from 'react';
import './Expenses.css';
import ExpensesList from './ExpensesList';
import Card from '../card/Card';
import ExpensesFilter from './ExpensesFilter';
import Chart from '../chart/Chart';

const Expenses = ({ expenses }) => {
	const [year, setYear] = useState('2020');

	const selectYearHandler = (selectedYear) => {
		setYear(selectedYear);
	};

	expenses = expenses.filter((expense) => {
		return new Date(expense.date).getFullYear() === +year;
	});

	const dataPoints = [
		{ label: 'JAN', value: 0 },
		{ label: 'FEB', value: 0 },
		{ label: 'MAR', value: 0 },
		{ label: 'APR', value: 0 },
		{ label: 'MAY', value: 0 },
		{ label: 'JUN', value: 0 },
		{ label: 'AUG', value: 0 },
		{ label: 'SEP', value: 0 },
		{ label: 'OCT', value: 0 },
		{ label: 'NOV', value: 0 },
		{ label: 'DEC', value: 0 },
	];

	for (const expense of expenses) {
		const month = new Date(expense.date).getMonth();
		dataPoints[month].value += +expense.amount;
	}

	return (
		<Card className="expenses">
			<ExpensesFilter onSelectYear={selectYearHandler} selectedYear={year} />
			<Chart dataPoints={dataPoints} />
			<ExpensesList items={expenses} />
		</Card>
	);
};

export default Expenses;
