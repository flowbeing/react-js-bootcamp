import {React} from "react";

import "./MainChartComponent.css";

import IndividualBarChart from "./IndividualBarChart/IndividualBarChart";

const MainChartComponent = ({expensesData, currentFilterYear}) => {

    // obtaining all relevant data for the current selected year
    let currentYearData = [];
    let totalExpenseCurrentYear = 0;
    
    for (var data of expensesData){
        console.log(`totalExpenseCurrentYear: ${totalExpenseCurrentYear}`);

        let currentDataDate = data.date;
        let currentDataYear = currentDataDate.getFullYear().toString();

        if (currentDataYear === currentFilterYear){
            currentYearData.push(data);
            totalExpenseCurrentYear += data.amount;
        }
    }

    console.log(currentYearData);
    console.log(`length: ${currentYearData.length}`);

    // CREATING (EACH) MONTH(S) OF THE YEAR CHART BAR - SHORT FORM
    let monthNumOrIndex = 0;
    let monthsShortForm = [];

    while (monthNumOrIndex < 12){

        // Determining the (current) month's short form
        var date = new Date();
        date.setMonth(monthNumOrIndex);
        let monthShortForm = date.toLocaleString('en-US', {month: "short"});

        // determining current month's expense and relative chart bar height
        let currentMonthsExpenseHeightIfAny = 0;

        // determining (current) month's total expense if any..
        let totalExpenseCurrentMonth = 0;
        for (let data of currentYearData){
            console.log(`dataa: ${data}`);
            let monthCurrentFilterYearData = data.date.toLocaleString('en-US', {month: "short"});
            
            if (monthCurrentFilterYearData == monthShortForm){
                console.log(`data.amount:totalExpenseCurrentYear, month:year -> ${data.amount}:${totalExpenseCurrentYear} -> ${monthCurrentFilterYearData}`);
                totalExpenseCurrentMonth += data.amount;
            }
        }

        if (totalExpenseCurrentMonth != 0){
            currentMonthsExpenseHeightIfAny = (totalExpenseCurrentMonth/totalExpenseCurrentYear)*100;
        }
        
        const currentMonthChartBar = <IndividualBarChart monthAbbreviation={monthShortForm} barHeightPercentage={currentMonthsExpenseHeightIfAny+"%"}/>

        monthsShortForm.push(currentMonthChartBar);

        monthNumOrIndex += 1;
    }

    console.log(monthsShortForm);

    return (

        <div className="main-chart___border">

            {monthsShortForm}

        </div>

    );
}

export default MainChartComponent;