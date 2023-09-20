import React from 'react';

import "./ListTile.css";

const ListTile = ({data}) => {

    return (

        <div className="list-tile-border">

            {/* Expense Date */}
            <div className="list-tile-expense-date">

                <div className="list-tile-expense-date___month">August</div>

                <div className="list-tile-expense-date___year">2020</div>

                <div className="list-tile-expense-date___day">14</div>
                
            </div>

            {/* Expense Title */}

                <div className='list-tile-description'>


                </div>

                <div className='list-tile-amount'>


                </div>

        </div>

    );

}

export default ListTile;