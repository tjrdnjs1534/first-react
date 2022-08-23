import "./App.css";
import Expenses from "./components/Expenses/Expenses";

function App() {
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
  return (
    <div>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
