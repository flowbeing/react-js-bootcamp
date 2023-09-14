import {React, useState} from 'react';

import "./ExpensesMainContainer.css";
import FilterByYear from "./FilterByYear/FilterByYear";
import MainChartComponent from "./MainChartComponent/MainChartComponent"


var ExpensesMainContainer = () => {

    const DUMMY_EXPENSES = [
        {
          id: 'e1',
          title: 'Toilet Paper',
          amount: 94.12,
          date: new Date(2020, 7, 14),
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
          date: new Date(2021, 2, 28),
        },
        {
          id: 'e4',
          title: 'New Desk (Wooden)',
          amount: 450,
          date: new Date(2021, 5, 12),
        },
    ];

    // currentFilterYearValue initial year set to 2022
    let [currentFilterYearValue, setCurrentFilterYearValue] = useState('2022');

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