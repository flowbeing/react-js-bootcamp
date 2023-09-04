import React from 'react';

import "./ExpensesMainContainer.css";


var ExpensesMainContainer = () => {

    return (
        <div className="expenses-main-container___center">

            <div className="expenses-main-container___border">

                <div className="expenses-main-container___filter">
                    
                    <label className="expenses-main-container___filter-label">Filter by year</label>

                    <select className="expenses-main-container___filter-dropdown">
                        <option>2022</option>
                        <option>2021</option>
                        <option>2020</option>
                        <option>2019</option>
                    </select>

                </div>

            </div>

        </div>
    );

}

export default ExpensesMainContainer;