import React from 'react';
import '../../styles/About/SkillsChart.css';

const CHART_MAX_VALUE = 5;

const SkillsChartBar = dataPair => {

  const drawSkillLevel = skillLevel => {
    return [...Array(CHART_MAX_VALUE)]
      .map((e, currentValue) =>
        skillLevel > currentValue
          ? <div className="chart-dot selected" key={currentValue}>{}</div>
          : <div className="chart-dot" key={currentValue}>{}</div>)
  }

  return <div className="skills-chart-bar" key={dataPair[0]}>
    <h3 className="chart-bar-key">{dataPair[0]}</h3>
    <div className="chart-bar-value">
      {drawSkillLevel(dataPair[1])}
    </div>
  </div>;
}


export default SkillsChartBar;
