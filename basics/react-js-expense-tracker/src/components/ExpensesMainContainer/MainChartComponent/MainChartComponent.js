import {React} from "react";

import ListOfExpenses from '../ListOfExpenses/ListOfExpenses';

import "./MainChartComponent.css";

import IndividualBarChart from "./IndividualBarChart/IndividualBarChart";

const MainChartComponent = ({expensesData, currentFilterYear}) => {

    console.log('');

    // creating a dictionary of months and their values for the relevant filter year
    let currentYearDataDict = {};

    // obtaining the maximum monthly expense for the current filter year
    let maximumMonthlyExpense = 0;

    let monthCount = 0;

    while (monthCount < 12){

        let date = new Date();
        date.setMonth(monthCount);

        let monthShort = date.toLocaleString('en-US', {month: 'short'});

        currentYearDataDict[monthShort] = {'total': 0, 'data': JSON.stringify('')};

        monthCount += 1;
    }
    
    for (var data of expensesData){

        let currentDataDate = data.date;

        let currentDataYear = currentDataDate.getFullYear().toString();
        let currentDataMonth = currentDataDate.toLocaleString('en-US', {month: 'short'});

        if (currentDataYear === currentFilterYear){

            currentYearDataDict[currentDataMonth]['total'] += data.amount;
            currentYearDataDict[currentDataMonth]['data'] = data;

            // updating the maximum monthly expense value
            let currentMonthTotalSoFar = currentYearDataDict[currentDataMonth]['total'];
            maximumMonthlyExpense = Math.max(maximumMonthlyExpense, currentMonthTotalSoFar);
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

        console.log(`${month}: ${currentYearDataDict[month]['total']}`);
        console.log(`barChartHeight: ${currentMonthBarChartHeightPercentage}`);
    }

    return (

        <div>

            <div className="main-chart___border">

            {monthlyIndividualChart}
            
            </div>

            {/* Including list of expenses in the main chart component. ExpensesMainContainer would be a better fit!  */}
            <ListOfExpenses/>


        </div>

    );
}

export default MainChartComponent;