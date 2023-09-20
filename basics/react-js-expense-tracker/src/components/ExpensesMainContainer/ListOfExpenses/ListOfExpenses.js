import React from 'react';

import ListTile from './ListTile/ListTile';

import "./ListOfExpenses.css"

const ListOfExpenses = () => {

    // element to show when there are no expenses
    const defaultElement = <h2 className="default-element">Found no expenses.</h2>;

    return (
        <div className="list-of-expenses-container">

            <ListTile/>

        </div>
    )

}

export default ListOfExpenses;