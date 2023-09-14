import React from "react"
import "./FilterByYear.css"


var FilterByYear = ({getFilterYear}) => {

    return (

        <div className="expenses-main-container___filter">
            
            <label className="expenses-main-container___filter-label">Filter by year</label>

            <select className="expenses-main-container___filter-dropdown" onChange={(event) => getFilterYear(event.target.value)}> 
                <option>2022</option>
                <option>2021</option>
                <option>2020</option>
                <option>2019</option>
            </select>

        </div>

    );
}

export default FilterByYear;