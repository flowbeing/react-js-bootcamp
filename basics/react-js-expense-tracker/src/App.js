import React, {useState} from "react";

import AddNewExpense from "./components/AddNewExpense/AddNewExpense";
import AddNewExpenseExpanded from "./components/AddNewExpenseExpanded/AddNewExpenseExpanded";
import ExpensesMainContainer from "./components/ExpensesMainContainer/ExpensesMainContainer";

function App() {

  const [isTopMostComponentExpanded, setIsTopMostComponentExpanded] = useState(false);

  // function to set whether topmost component's expanded or not
  var updateIsTopMostComponentExpanded = (newExpenseDetails) => {

    // STOPPED HERE!!
    // if the topmost component is an expanded add new expenses component, add the new expense details
    // to the list of expenses
    if (isTopMostComponentExpanded === true){

    }

    // reverse the value of isTopMostComponentExpanded to ensure that the right top most add expense widget is displayed
    // if isTopMostComponentExpanded is reversed to false, a collapsed version of the add expense widget will be displayed and vise versa
    setIsTopMostComponentExpanded(!isTopMostComponentExpanded);

  }

  return (
    <div >
      {isTopMostComponentExpanded === false ? 
        <AddNewExpense updateIsTopMostComponentExpandedFunction={updateIsTopMostComponentExpanded}/>: 
        <AddNewExpenseExpanded updateIsTopMostComponentExpandedFunction={updateIsTopMostComponentExpanded}/>
      }
      <ExpensesMainContainer/>
    </div>
  );

}

export default App;