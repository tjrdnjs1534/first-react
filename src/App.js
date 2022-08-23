import "./App.css";
import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "toilet paper",
      amount: 92,
      date: new Date(2022, 8, 22),
    },
  ];
  return (
    <div>
      <ExpenseItem
        date={expenses[0].date}
        title={expenses[0].title}
        amount={expenses[0].amount}
      ></ExpenseItem>
    </div>
  );
}

export default App;
