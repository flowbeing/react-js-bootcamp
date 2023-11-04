import React from 'react';

import ListTile from './ListTile/ListTile';

import "./ListOfExpenses.css";

const ListOfExpenses = ({currentFilterYearExpensesDataDeconstructed}) => {

    console.log(`currentFilterYearExpensesDataDeconstructed: ${currentFilterYearExpensesDataDeconstructed}`);
    // console.log(`currentFilterYearExpensesDataDeconstructed length: ${currentFilterYearExpensesDataDeconstructed.size}`);
    // console.log(`{}.length: ${Object.keys({'1': 'one'}).length}`);
    
    var currentFilterYearExpensesDataDeconstructedLength = Object.keys(currentFilterYearExpensesDataDeconstructed).length;
    console.log(`currentFilterYearExpensesDataDeconstructedLength: ${currentFilterYearExpensesDataDeconstructedLength}`);

    // determines whether "Found No Expenses" should be displayed or an expense's list tile.
    var componentToDisplay;

    // mapping current selected filter year's expense data into a list tile
    if (currentFilterYearExpensesDataDeconstructedLength > 0){
        componentToDisplay = Object.keys(currentFilterYearExpensesDataDeconstructed).map((expenseNum) => {

            console.log(`expenseDetails: ${currentFilterYearExpensesDataDeconstructed[expenseNum]}`);

            var expenseDetails = currentFilterYearExpensesDataDeconstructed[expenseNum];

            let expenseId = expenseDetails['id'];
            let expenseYear = expenseDetails['year'];
            let expenseMonth = expenseDetails['month'];
            let expenseDay = expenseDetails['day'];
            let expenseTitle = expenseDetails['title'];
            let expenseAmount = expenseDetails['amount'];
            
            return <ListTile key={expenseId} monthLong={expenseMonth} yearNumberAsString={expenseYear} dayNumberAsString={expenseDay} expenseTitle={expenseTitle} expenseAmount={expenseAmount}/>;
        });
    }
    else{
        // element to show when there are no expenses
        const defaultElement = <h2 className="default-element">Found no expenses.</h2>;
        componentToDisplay = [defaultElement];
    }

    console.log(`componentToDisplay: ${componentToDisplay}`);

    return (
        <div className="list-of-expenses-container">

            {componentToDisplay}

        </div>
    );

}

export default ListOfExpenses;