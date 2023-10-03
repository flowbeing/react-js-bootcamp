import React from "react";

import AddNewExpense from "./components/AddNewExpense/AddNewExpense";
import AddNewExpenseExpanded from "./components/AddNewExpenseExpanded/AddNewExpenseExpanded";
import ExpensesMainContainer from "./components/ExpensesMainContainer/ExpensesMainContainer";

function App() {

  return (
    <div >
      {/* <AddNewExpense/> */}
      <AddNewExpenseExpanded/>
      <ExpensesMainContainer/>
    </div>
  );

}

export default App;