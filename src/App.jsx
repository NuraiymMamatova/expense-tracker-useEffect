import { useEffect, useState } from "react";
import Expenses from "./components/expenses/Expenses";
import NewExpense from "./components/new-expense/NewExpense";
import "./App.css";
import Header from "./components/header/Header";
import Login from "./components/login/Login";
import Users from "./components/users/Users";

function App() {
  const [expenses, setExpenses] = useState([]);
  const [isUserLogined, setIsUserLogined] = useState(
    Boolean(localStorage.getItem("USER")) || false
  );
  const [isShowUsers, setIsShowUsers] = useState(false);
  const addNewExpenseHandler = (newExpense = {}) => {
    setExpenses((prevExpenses) => {
      return [...prevExpenses, newExpense];
    });

    localStorage.setItem("EXPENSES", JSON.stringify([...expenses, newExpense]));
  };

  useEffect(() => {
    const savedExpenses = JSON.parse(localStorage.getItem("EXPENSES")) || [];
    setExpenses(savedExpenses.map((e) => ({ ...e, date: new Date(e.date) })));
  }, []);

  const deleteExpenseByIdHandler = (id) => {
    setExpenses((prevExpenses) =>
      prevExpenses.filter((expense) => expense.id !== id)
    );

    localStorage.setItem(
      "EXPENSES",
      JSON.stringify(expenses.filter((expense) => expense.id !== id))
    );
  };

  return (
    <>
      {isUserLogined ? (
        <>
          <Header setIsUserLogined={setIsUserLogined} setIsShowUsers={setIsShowUsers}/>
          {isShowUsers ? (
            <Users />
          ) : (
            <>
              <NewExpense onAddNewExpense={addNewExpenseHandler} />
              <Expenses
                expenses={expenses}
                onDeleteExpense={deleteExpenseByIdHandler}
              />
            </>
          )}
        </>
      ) : (
        <Login setIsUserLogined={setIsUserLogined} />
      )}
    </>
  );
}

export default App;
