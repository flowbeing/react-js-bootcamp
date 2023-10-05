import React from "react";

import "./AddNewExpense.css"

function AddNewExpense({updateIsTopMostComponentExpandedFunction}){



    return (

        <div className="add-new-expense___center">

            <div className="add-new-expense___border">
            
                <div className="add-new-expense___btn" onClick={() => updateIsTopMostComponentExpandedFunction()}> 
                    Add New Expense
                </div>

            </div>

        </div>

    );
    
}

export default AddNewExpense;

// className="add-new-expense___btn"