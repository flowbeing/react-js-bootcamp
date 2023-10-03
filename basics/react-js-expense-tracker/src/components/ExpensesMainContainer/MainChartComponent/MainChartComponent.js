import {React} from "react";

import ListOfExpenses from '../ListOfExpenses/ListOfExpenses';

import "./MainChartComponent.css";

import IndividualBarChart from "./IndividualBarChart/IndividualBarChart";

const MainChartComponent = ({expensesData, currentFilterYear}) => {

    console.log('');

    // a map (dictionary) of months and their total expenses for the relevant filter year 
    let currentYearDataDict = {};

    // a map of each expense within the relevant year
    let currentYearEachExpense = {};

    // maximum monthly expense for the current filter year
    let maximumMonthlyExpense = 0;

    let monthCount = 0;

    // populating currentYearDataDict with months & their total expenses set to zero
    while (monthCount < 12){

        let date = new Date();
        date.setMonth(monthCount);

        let monthShort = date.toLocaleString('en-US', {month: 'short'});

        currentYearDataDict[monthShort] = {'total': 0, 'data': JSON.stringify('')};

        monthCount += 1;
    }
    
    // populating:
    // 1. currentYearDataDict with the real total expenses value for each month
    // 2. currentYearEachExpense with each day's expense data
    let currentYearEachExpenseCount = 0;

    for (var data of expensesData){

        let currentDataDate = data.date;

        let currentDataYear = currentDataDate.getFullYear().toString();
        let currentDataMonthShort = currentDataDate.toLocaleString('en-US', {month: 'short'});
        let currentDataMonthLong = currentDataDate.toLocaleString('en-US', {month: 'long'});
        let currentDataDay = currentDataDate.getDate().toString();

        if (currentDataYear === currentFilterYear){

            // 1. 
            currentYearDataDict[currentDataMonthShort]['total'] += data.amount;
            currentYearDataDict[currentDataMonthShort]['data'] = data;

            // updating the maximum monthly expense value
            let currentMonthTotalSoFar = currentYearDataDict[currentDataMonthShort]['total'];
            maximumMonthlyExpense = Math.max(maximumMonthlyExpense, currentMonthTotalSoFar);

            // 2.
            currentYearEachExpense[currentYearEachExpenseCount] = {};
            currentYearEachExpense[currentYearEachExpenseCount]['year'] = currentDataYear;
            currentYearEachExpense[currentYearEachExpenseCount]['month'] = currentDataMonthLong;
            currentYearEachExpense[currentYearEachExpenseCount]['day'] = currentDataDay;
            currentYearEachExpense[currentYearEachExpenseCount]['amount'] = data.amount;
            currentYearEachExpense[currentYearEachExpenseCount]['title'] = data.title;

            console.log(`currentYearEachExpense[${currentYearEachExpenseCount}] = ${currentYearEachExpense[currentYearEachExpenseCount]}`);

            currentYearEachExpenseCount += 1;

        }
    }

    

    let monthlyIndividualChart = [];
    // mapping individual charts for each month of the relevant year
    for (let month in currentYearDataDict){

        let currentMonthTotalExpense = currentYearDataDict[month]['total'];
        let currentMonthBarChartHeightPercentage = "0%";
        
        if (currentMonthTotalExpense > 0){
            currentMonthBarChartHeightPercentage = ((currentYearDataDict[month]['total'] / maximumMonthlyExpense) * 100) + "%"; 
        }

        monthlyIndividualChart.push(<IndividualBarChart monthAbbreviation={month} barHeightPercentage={currentMonthBarChartHeightPercentage}/>);

        // console.log(`${month}: ${currentYearDataDict[month]['total']}`);
        // console.log(`barChartHeight: ${currentMonthBarChartHeightPercentage}`);
    }

    return (

        <div>

            <div className="main-chart___border">

            {monthlyIndividualChart}
            
            </div>

            {/* Including list of expenses in the main chart component. ExpensesMainContainer would be a better fit!  */}
            <ListOfExpenses currentFilterYearExpensesDataDeconstructed={currentYearEachExpense}/>
            


        </div>

    );
}

export default MainChartComponent;