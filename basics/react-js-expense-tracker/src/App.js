import React, {useState} from "react";

import AddNewExpense from "./components/AddNewExpense/AddNewExpense";
import AddNewExpenseExpanded from "./components/AddNewExpenseExpanded/AddNewExpenseExpanded";
import ExpensesMainContainer from "./components/ExpensesMainContainer/ExpensesMainContainer";


// CURRENT ISSUES
// 1. updateIsTopMostComponentExpanded is run / displays twice to be run twice
// 2. 

function App() {

  // bool to track whether or not the add expense component has been expanded
  const [isTopMostComponentExpanded, setIsTopMostComponentExpanded] = useState(false);
  
  // variable that holds new expense details. Type - Object
  var newExpenseDetailsData = {};

  // function to set whether topmost component's expanded or not
  var updateIsTopMostComponentExpanded = (isAddExpenseButtonClicked, newExpenseDetails) => {

    // STOPPED HERE!!
    // If the topmost component is an expanded add new expenses component, isTopMostComponentExpanded would be true.
    // If it's true, it denotes that either a new expense has been added by clicking the 'Add Expense' button or cancelled by clicking the 'Cancel' button
    // If the topmost "add new expense" component's expanded and 'Add Expense' button was clicked (i.e a new expense was added), save the 'new expense' details
    // to newExpenseDetails, otherwise set the value of newExpenseDtails as {} (an empty object)

    
    if (isTopMostComponentExpanded === true && isAddExpenseButtonClicked === true){


      if (newExpenseDetails['title'] !== ''){

        console.log('');
        console.log(`isAddExpenseButtonClicked: ${isAddExpenseButtonClicked}`);
        console.log(`newExpenseDetails: ${newExpenseDetails}`);
        console.log(`newExpenseDetails: ${Object.keys(newExpenseDetails)}, ${Object.values(newExpenseDetails)}`);
        console.log("");

        newExpenseDetailsData = newExpenseDetails;

      }
    }

    else{

      newExpenseDetailsData = {};

    }

    // reverse the value of isTopMostComponentExpanded to ensure that the right top most add expense widget is displayed
    // if isTopMostComponentExpanded is reversed to false, a collapsed version of the add expense widget will be displayed and vise versa
    setIsTopMostComponentExpanded(!isTopMostComponentExpanded);

    console.log(`newExpenseDetailsData keys: ${Object.keys(newExpenseDetailsData).length}`);


  }

  return (
    <div >
      {isTopMostComponentExpanded === false ? 
        <AddNewExpense updateIsTopMostComponentExpandedFunction={updateIsTopMostComponentExpanded}/>: 
        <AddNewExpenseExpanded updateIsTopMostComponentExpandedFunction={updateIsTopMostComponentExpanded}/>
      }
      <ExpensesMainContainer newExpenseDetailsObject={newExpenseDetailsData}/>
    </div>
  );

}

export default App;