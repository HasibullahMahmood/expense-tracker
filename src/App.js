import Expenses from './components/expenses/Expenses';
import NewExpense from './components/newExpense/NewExpense';

const App = () => {
	return (
		<div>
			<NewExpense />
			<Expenses />
		</div>
	);
};

export default App;
