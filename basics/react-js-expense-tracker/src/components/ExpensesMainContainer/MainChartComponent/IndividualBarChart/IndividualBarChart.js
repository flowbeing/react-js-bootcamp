import React from "react";

import "./IndividualBarChart.css";

const IndividualBarChart = ({monthAbbreviation, barHeightPercentage}) => {

    return (

        <div className="individual-chart-bar">

            <div className="individual-chart-bar___inner">

                <div className="individual-chart-bar___inner-percentage" style={{'height': barHeightPercentage}}></div>

            </div>

            <div className="individual-chart-bar___label">{monthAbbreviation}</div>

        </div>
    );

}

export default IndividualBarChart;