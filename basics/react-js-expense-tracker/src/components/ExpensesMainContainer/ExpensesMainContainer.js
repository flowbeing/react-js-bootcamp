import {React} from 'react';

import "./ExpensesMainContainer.css";
import FilterByYear from "./FilterByYear/FilterByYear";
import MainChartComponent from "./MainChartComponent/MainChartComponent"

// expenses data
const DUMMY_EXPENSES = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14)
    },
    { 
        id: 'e2', 
        title: 'New TV', 
        amount: 799.49, 
        date: new Date(2021, 2, 12)
    },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28)
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12)
    },
];


let buildCountExpensesMainContainer = 0;

// This component contains the following components:
// a. FilterByYear component
// b. Expenses Chart Component
// c. List of Expenses Component
const ExpensesMainContainer = (props) => {

    // current expense year. i.e year to use as current filter year and within list of expenses & main chart component..
    // let currentExpenseYear = '2022';

    let newExpenseDetailsObject = props.newExpenseDetailsObject;
    let updateFilterYearValueFunction = props.updateFilterYearValueFunction;
    

    // STOPPED HERE!
    // Can't prevent a new instance of newExpenseDetailsObject from being addd to DUMMY_EXPENSES after changing filter year
    // repeatedly. Seems like newExpenseDetailsObject retains its value within the App.js file and keeps getting implemented
    // as it exactly was repeatedly..
    let lengthOfNewExpenseDetailsObject = Object.keys(newExpenseDetailsObject).length;
    console.log('');
    console.log('--------------------------------');
    console.log('NEW BUILD EXPENSESMAINCONTAINER');
    console.log(`length of new expense details object: ${Object.keys(newExpenseDetailsObject).length}`);

    // length of new expense data. helps determine whether or not a user has entered new expense data..
    // if there's new expense data, push it to "DUMMY_EXPENSES" object
    if (lengthOfNewExpenseDetailsObject > 1){

        // determining the current length of DUMMY_EXPENSES
        let lengthOfCurrentExpensesData = Object(DUMMY_EXPENSES).keys().length;
        let newExpenseId = 'e' + (lengthOfCurrentExpensesData + 1);

        // if the user has entered a new expense data, add it to the expense data list, and change the
        // current filter year to the new expense's year
        DUMMY_EXPENSES.push(
            {
                'id': newExpenseId,
                'title': newExpenseDetailsObject['title'],
                'amount': newExpenseDetailsObject['amount'],
                'date': new Date(newExpenseDetailsObject['date'])
            }
        );
        

        // resetting the length of newExpenseDetailsObject to 1
        // newExpenseDetailsObject = {'date': new Date(newExpenseDetailsObject['date'])};
        // lengthOfNewExpenseDetailsObject = Object.keys(newExpenseDetailsObject).length;

        // console.log(`new length of new expense details object: ${lengthOfNewExpenseDetailsObject}`);
        
        console.log(`pushed new expense data to dummy data`);
        
    }

    // obtaining the relevant filter year
    let relevantFilterYear = new Date(newExpenseDetailsObject['date']).getFullYear().toString();

    console.log('');
    console.log(`relevant filter year: ${relevantFilterYear}`);
    console.log(`dummy data length: ${DUMMY_EXPENSES.length}`);

    // currentFilterYearValue initial year set to 2022
    // let [currentFilterYearValue, setCurrentFilterYearValue] = useState("2022");

    // console.log(`current filter year: ${currentFilterYearValue}`);

    // this function helps change the current expenses filter year to a user's selection

    console.log(`buildCountExpensesMainContainer: ${buildCountExpensesMainContainer}`);
    buildCountExpensesMainContainer += 1;

    return (
        <div className="expenses-main-container___center">

            <div className="expenses-main-container___border">

                {/* Filter by year component */}
                <FilterByYear currentFilterYear={relevantFilterYear} updateFilterYear={updateFilterYearValueFunction}/>
                {/* Expenses Chart & List of Expenses components */}
                <MainChartComponent expensesData={DUMMY_EXPENSES} currentFilterYear={relevantFilterYear}/>

            </div>

        </div>
    );

}

export default ExpensesMainContainer;