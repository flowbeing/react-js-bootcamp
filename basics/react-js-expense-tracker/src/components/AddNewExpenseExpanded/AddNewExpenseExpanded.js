import React from "react";

import "./AddNewExpenseExpanded.css";

var AddNewExpenseExpanded = ({updateIsTopMostComponentExpandedFunction}) => {

    let title = '';
    let amount = 0;
    let date = new Date();

    return (
        
        <div className="add-new-expense-expanded-center">

            {/* New Expense Details Container */}
            <div className="add-new-expense-expanded-border">

                {/* New Expense Details; Title, Amount, Date */}
                <div className="add-new-expense-expanded-details">

                    {/* Expense Title - input field */}
                    <div className="add-new-expense-input-container">

                        <label className="add-new-expense-input___label">Title</label>
                        <input 
                            className="add-new-expense-input___element" 
                            onChange={(event) => title = event.target.value}
                        ></input>

                    </div>

                    {/* Expense Amount - input field */}
                    <div className="add-new-expense-input-container">

                        <label className="add-new-expense-input___label">Amount</label>
                        <input 
                            className="add-new-expense-input___element" 
                            type="number" 
                            min="0.00" 
                            step="0.01" 
                            onChange={(event) => amount = event.target.value}
                        ></input>

                    </div>

                    {/* Expense Date - input field */}
                    <div className="add-new-expense-input-container">

                        <label className="add-new-expense-input___label">Date</label>
                        <input 
                            className="add-new-expense-input___element" 
                            type="date" 
                            min="2019-01-01" 
                            max="2022-12-31" 
                            style={{"fontFamily": "Noto Sans JP", "font-size": "16px"}}
                            onChange={(event) => date = new Date(event.target.value)}>

                        </input>

                    </div>


                </div>

                {/* Action Buttons */}
                <div className="add-new-expense-buttons-container">

                    <button className="cancel-button" onClick={() => updateIsTopMostComponentExpandedFunction(
                        false, // isAddExpenseButtonClicked
                        {} // newExpenseDetails
                    )}>Cancel</button>
                    <button className="add-expense-button" onClick={() => updateIsTopMostComponentExpandedFunction(
                        true, // isAddExpenseButtonClicked
                        {
                            'title': title,
                            'amount': amount,
                            'date': date
                        } // newExpenseDetails
                    )}>Add Expense</button>

                </div>

            </div>

        </div>
    )
}

export default AddNewExpenseExpanded;