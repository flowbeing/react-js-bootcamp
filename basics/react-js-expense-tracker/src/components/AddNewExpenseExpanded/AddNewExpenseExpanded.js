import React from "react";

import "./AddNewExpenseExpanded.css";

var AddNewExpenseExpanded = () => {

    return (
        
        <div className="add-new-expense-expanded-center">

            {/* New Expense Details Container */}
            <div className="add-new-expense-expanded-border">

                {/* New Expense Details; Title, Amount, Date */}
                <div className="add-new-expense-expanded-details">

                    {/* Expense Title - input field */}
                    <div className="add-new-expense-input-container">

                        <label className="add-new-expense-input___label">Title</label>
                        <input className="add-new-expense-input___element"></input>

                    </div>

                    {/* Expense Amount - input field */}
                    <div className="add-new-expense-input-container">

                        <label className="add-new-expense-input___label">Amount</label>
                        <input className="add-new-expense-input___element"></input>

                    </div>

                    {/* Expense Date - input field */}
                    <div className="add-new-expense-input-container">

                        <label className="add-new-expense-input___label">Date</label>
                        <input className="add-new-expense-input___element"></input>

                    </div>


                </div>

            </div>

        </div>
    )
}

export default AddNewExpenseExpanded;