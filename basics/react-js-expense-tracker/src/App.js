import React, {useState} from "react";

import AddNewExpense from "./components/AddNewExpense/AddNewExpense";
import AddNewExpenseExpanded from "./components/AddNewExpenseExpanded/AddNewExpenseExpanded";
import ExpensesMainContainer from "./components/ExpensesMainContainer/ExpensesMainContainer";


// CURRENT ISSUES
// 1. updateIsTopMostComponentExpanded is run / displays twice to be run twice
// 2. 

function App() {

  // bool to track whether or not the add expense component has been expanded
  let [isTopMostComponentExpanded, setIsTopMostComponentExpanded] = useState(false);
  
  // variable that holds new expense details. Type - Object
  let [newExpenseDetailsData, setNewExpenseDetailsData] = useState({});

  // function to set whether topmost component's expanded or not
  var updateIsTopMostComponentExpanded = (isAddExpenseButtonClicked, newExpenseDetails) => {

    
    // If the topmost component is an expanded add new expenses component, isTopMostComponentExpanded would be true.
    // If it's true, it denotes that either a new expense has been added by clicking the 'Add Expense' button or cancelled by clicking the 'Cancel' button
    // If the topmost "add new expense" component's expanded and 'Add Expense' button was clicked (i.e a new expense was added), save the 'new expense' details
    // to newExpenseDetails, otherwise set the value of newExpenseDtails as {} (an empty object)

    if (isTopMostComponentExpanded === true && isAddExpenseButtonClicked === true){

      // console.log(`?type date: ${typeof(newExpenseDetails['date']) === 'string'}`);


      if (newExpenseDetails['title'] !== '' && newExpenseDetails['amount'] !== 0 && typeof(newExpenseDetails['date']) === 'string'){

        console.log('');
        console.log(`isAddExpenseButtonClicked: ${isAddExpenseButtonClicked}`);
        console.log(`newExpenseDetails: ${newExpenseDetails}`);
        console.log(`newExpenseDetails: ${Object.keys(newExpenseDetails)}, ${Object.values(newExpenseDetails)}`);
        console.log(`Date String Parse: ${new Date(newExpenseDetails['date'])}`);
        console.log("");


        setNewExpenseDetailsData(newExpenseDetails);
        // setNewExpenseDetailsData({});


      }

    }

    else{

      newExpenseDetailsData = {};
      setNewExpenseDetailsData({});

    }

    // reverse the value of isTopMostComponentExpanded to ensure that the right top most add expense widget is displayed
    // if isTopMostComponentExpanded is reversed to false, a collapsed version of the add expense widget will be displayed and vise versa
    setIsTopMostComponentExpanded(!isTopMostComponentExpanded);

    console.log(`newExpenseDetailsData keys: ${Object.keys(newExpenseDetailsData).length}`);


  }

  console.log('');
  console.log('build');

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