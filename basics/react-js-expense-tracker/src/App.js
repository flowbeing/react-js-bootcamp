import React, {useState} from "react";

import AddNewExpense from "./components/AddNewExpense/AddNewExpense";
import AddNewExpenseExpanded from "./components/AddNewExpenseExpanded/AddNewExpenseExpanded";
import ExpensesMainContainer from "./components/ExpensesMainContainer/ExpensesMainContainer";


let buildCountAppjs = 0;

function App() {

  console.log('');
  console.log('--------------------------------');
  console.log('NEW BUILD APPJS');

  // bool to track whether or not the add expense component has been expanded
  let [isTopMostComponentExpanded, setIsTopMostComponentExpanded] = useState(false);
  
  // variable that holds new expense details. Type - Object
  let [newExpenseDetailsData, setNewExpenseDetailsData] = useState({'date': new Date("2022, 01, 01")});

  // function to set whether topmost component's expanded or not
  var updateIsTopMostComponentExpanded = (isAddExpenseButtonClicked, newExpenseDetails) => {

    // current newExpenseDetailsData 'date' (year);
    // let currentExpenseFilterYear = newExpenseDetailsData['date'].getFullYear().toString();
    // console.log(`newExpenseDetailsData full year: ${currentExpenseFilterYear}, type: ${typeof(currentExpenseFilterYear)}`);

    // new expense details 'date' (year)
    // let newExpenseFilterYear;

    if (newExpenseDetails !== undefined && newExpenseDetails['date'] !== undefined){
      // newExpenseFilterYear = newExpenseDetails['date'].getFullYear().toString();
      // console.log(`newExpenseFilterYear: ${newExpenseFilterYear}, type: ${typeof(newExpenseFilterYear)}`);
      // console.log(`typeof newExpenseDetails['date']: ${typeof(newExpenseDetails['date'])}`);
    }

    
    // If the topmost component is an expanded add new expenses component, isTopMostComponentExpanded would be true.
    // If it's true, it denotes that either a new expense has been added by clicking the 'Add Expense' button or cancelled by clicking the 'Cancel' button
    // If the topmost "add new expense" component's expanded and 'Add Expense' button was clicked (i.e a new expense was added), save the 'new expense' details
    // to newExpenseDetails, otherwise set the value of newExpenseDtails as {} (an empty object)

    if (isTopMostComponentExpanded === true && isAddExpenseButtonClicked === true){

      // console.log(`?type date: ${typeof(newExpenseDetails['date']) === 'string'}`);


      // if a new expense's introduced via the expanded add expense component, add it as newExpenseDetailsData
      if (newExpenseDetails['title'] !== '' && newExpenseDetails['amount'] !== 0 && typeof(newExpenseDetails['date']) === 'object'){

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

    // if isTopMostComponentExpanded was previously false i.e the topmost (Add expense) component was previously collapsed and just got clicked,
    // do not change the Filter Year in MainChartComponent
    else if (isTopMostComponentExpanded === false){
      
      setNewExpenseDetailsData({'date': newExpenseDetailsData['date']});

    }
    // if the topmost component's expanded, and cancel button is clicked (newExpenseDetails will be empty in that case), 
    // do not change the Filter Year in MainChartComponent
    else if (isTopMostComponentExpanded === true && Object.keys(newExpenseDetails).length === 0){

      setNewExpenseDetailsData({'date': newExpenseDetailsData['date']});

    }


    // reverse the value of isTopMostComponentExpanded to ensure that the right top most add expense widget is displayed
    // if isTopMostComponentExpanded is reversed to false, a collapsed version of the add expense widget will be displayed and vise versa
    setIsTopMostComponentExpanded(!isTopMostComponentExpanded);

    console.log(`newExpenseDetailsData keys: ${Object.keys(newExpenseDetailsData).length}`);


  }

  // function that helps update the current expense year to the user's selection "Filter by Year" dropdown selection..
  const updateFilterYearValueFunction = (currentFilterYear) => {

    let newExpenseFilterYearAndDate = new Date(`${currentFilterYear}, 01, 01`);

    setNewExpenseDetailsData({'date': newExpenseFilterYearAndDate});

    // console.log(`currentFilterYearValue: ${currentFilterYearValue}`);
};

  console.log('');
  console.log('build');

  console.log(`buildCountAppjs: ${buildCountAppjs}`);
  buildCountAppjs += 1;

  return (
    <div >
      {isTopMostComponentExpanded === false ? 
        <AddNewExpense updateIsTopMostComponentExpandedFunction={updateIsTopMostComponentExpanded}/>: 
        <AddNewExpenseExpanded updateIsTopMostComponentExpandedFunction={updateIsTopMostComponentExpanded}/>
      }
      <ExpensesMainContainer newExpenseDetailsObject={newExpenseDetailsData} updateFilterYearValueFunction={updateFilterYearValueFunction}/>
    </div>
  );

  

}

export default App;