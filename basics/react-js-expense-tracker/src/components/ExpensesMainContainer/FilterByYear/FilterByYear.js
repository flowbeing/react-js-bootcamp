import React from "react"
import "./FilterByYear.css"


var FilterByYear = ({updateFilterYear, currentFilterYear}) => {

    return (

        <div className="expenses-main-container___filter">
            
            <label className="expenses-main-container___filter-label">Filter by year</label>

            <select value={currentFilterYear} className="expenses-main-container___filter-dropdown" onChange={(event) => updateFilterYear(event.target.value)}> 
                <option>2022</option>
                <option>2021</option>
                <option>2020</option>
                <option>2019</option>
            </select>

        </div>

    );
}

export default FilterByYear;