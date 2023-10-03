import React from 'react';

import "./ListTile.css";

const ListTile = ({monthLong, yearNumberAsString, dayNumberAsString, expenseTitle, expenseAmount}) => {

    return (

        <div className="list-tile-border">

            {/* Expense Date */}
            <div className="list-tile-expense-date">

                <div className="list-tile-expense-date___month">{monthLong}</div>

                <div className="list-tile-expense-date___year">{yearNumberAsString}</div>

                <div className="list-tile-expense-date___day">{dayNumberAsString}</div>
                
            </div>

            {/* Container that holds Expense Title & Amount Spent */}
            <div className="list-tile-description-and-amount">

                {/* Expense Title */}
                <h2 className='list-tile-description'>{expenseTitle}</h2>

                {/* Amount spent */}
                <div className='list-tile-amount'>{"$" + expenseAmount}</div>

            </div>

        </div>

    );

}

export default ListTile;