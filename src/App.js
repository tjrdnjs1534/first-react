import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "toilet paper",
      amount: 92,
      date: new Date(2022, 8, 22),
    },
    {
      id :"e2",
      title: "car",
      amount: 9,
      date : new Date(2022,8,23)
    }
  ];

  const addExpenseHandler = expense =>{
    console.log('in app.js');
    console.log(expense);
  }
  return (
    <div>
      <NewExpense onAddExpense = {addExpenseHandler}></NewExpense>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
