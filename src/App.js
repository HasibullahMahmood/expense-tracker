import Expenses from './components/expenses/Expenses';
import NewExpense from './components/newExpense/NewExpense';

const App = () =>
{
	const addExpenseHandler = (expense) =>
	{
		console.log(expense)
	}
	return (
		<div>
			<NewExpense onAddExpense={ addExpenseHandler}/>
			<Expenses />
		</div>
	);
};

export default App;
