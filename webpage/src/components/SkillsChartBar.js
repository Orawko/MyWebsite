import React from 'react';
import '../styles/SkillsChart.css';

const CHART_MAX_VALUE = 5;

const SkillsChartBar = dataPair => {

  const drawSkillLevel = skillLevel => {
    return [...Array(CHART_MAX_VALUE)]
      .map((e, currentValue) =>
        skillLevel > currentValue
          ? <div className="chartDot selected">{}</div>
          : <div className="chartDot">{}</div>)
  }

  return <div id="skillsChartBar">
    <h3 id="chartBarKey">{dataPair[0]}</h3>
    <div id="chartBarValue">
      {drawSkillLevel(dataPair[1])}
    </div>
  </div>;
}


export default SkillsChartBar;
