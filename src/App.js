import react,{useState} from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
const App = () => {
  const expenses = [
    {
      id: 1,
      date: new Date(2022, 2, 28),
      title: "Car Insurance",
      amount: 294.67,
    },
    {
      id: 2,
      date: new Date(2022, 2, 29),
      title: "Health Insurance",
      amount: 400.66,
    },
    {
      id: 3,
      date: new Date(2021, 2, 30),
      title: "House Insurance",
      amount: 300.37,
    },
    {
      id: 4,
      date: new Date(2022, 12, 17),
      title: "Biscuit",
      amount: 300.37,
    },
    {
      id: 5,
      date: new Date(2020, 5, 4),
      title: "Parfum",
      amount: 300.37,
    }
  ];
  const [myExpenses, setMyExpenses] = useState(expenses);
  const addExpense = expense => {
    console.log("in App.js");
    setMyExpenses(prevExpense =>{
      return [...prevExpense,expense]
    });
    console.log(myExpenses);
  };
  return (
    <div>
      <NewExpense  onAddExpense={addExpense}/>
      <Expenses expenses={myExpenses}/>
    </div>
  );
}

export default App;
