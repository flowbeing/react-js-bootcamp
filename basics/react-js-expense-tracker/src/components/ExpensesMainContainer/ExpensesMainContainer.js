import {React, useState} from 'react';

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


var ExpensesMainContainer = ({newExpenseDetailsObject}) => {

    // current expense year. i.e year to use as current filter year and within list of expenses & main chart component..
    // let currentExpenseYear = '2022';
    

    let lengthOfNewExpenseDetailsObject = Object.keys(newExpenseDetailsObject).length;
    console.log(`length of new expense details object: ${lengthOfNewExpenseDetailsObject}`);

    // length of new expense data. helps determine whether or not a user has entered new expense data..
    if (lengthOfNewExpenseDetailsObject > 0){

        // determining the current length of DUMMY_EXPENSES
        let lengthOfCurrentExpensesData = Object(DUMMY_EXPENSES).keys().length;
        let newExpenseId = 'e' + (lengthOfCurrentExpensesData + 1);

        // if the user has entered a new expense data, add it to the expense data list, and change the
        // current filter year to the new expense's year
        DUMMY_EXPENSES.push(
            {
                id: newExpenseId,
                title: newExpenseDetailsObject['title'],
                amount: newExpenseDetailsObject['amount'],
                date: new Date(newExpenseDetailsObject['date'])
            }
        );

        // STOPPED HERE! (trying to incorporate the new expense's year value (if any) into currentFilterYearValue)
        // obtaining the new expense's year (if any)
        let newExpenseYear = new Date(newExpenseDetailsObject['date']).getFullYear().toString();
        

        // console.log(`pushed new expense data to dummy data`);
    }

    // console.log(`dummy data length: ${DUMMY_EXPENSES.length}`);

    // currentFilterYearValue initial year set to 2022
    let [currentFilterYearValue, setCurrentFilterYearValue] = useState('2022');


    // this function helps change the current expenses filter year to a user's selection
    const currentFilterYearValueFunction = (currentFilterYear) => {

        setCurrentFilterYearValue(currentFilterYear);

        // console.log(`currentFilterYearValue: ${currentFilterYearValue}`);
    };

    return (
        <div className="expenses-main-container___center">

            <div className="expenses-main-container___border">

                <FilterByYear getFilterYear={currentFilterYearValueFunction}/>
                <MainChartComponent expensesData={DUMMY_EXPENSES} currentFilterYear={currentFilterYearValue}/>

            </div>

        </div>
    );

}

export default ExpensesMainContainer;