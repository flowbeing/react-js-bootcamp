import React from "react";

import AddNewExpense from "./components/AddNewExpense";
import ExpensesMainContainer from "./components/ExpensesMainContainer/ExpensesMainContainer";

function App() {

  return (
    <div >
      <AddNewExpense/>
      <ExpensesMainContainer/>
    </div>
  );

}

export default App;