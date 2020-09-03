import React from 'react';
import '../../styles/About/SkillsChart.css';

const CHART_MAX_VALUE = 5;

const SkillsChartBar = dataPair => {

  const drawSkillLevel = skillLevel => {
    return [...Array(CHART_MAX_VALUE)]
      .map((e, currentValue) =>
        skillLevel > currentValue
          ? <div className="chartDot selected" key={currentValue}>{}</div>
          : <div className="chartDot" key={currentValue}>{}</div>)
  }

  return <div id="skillsChartBar" key={dataPair[0]}>
    <h3 id="chartBarKey">{dataPair[0]}</h3>
    <div id="chartBarValue">
      {drawSkillLevel(dataPair[1])}
    </div>
  </div>;
}


export default SkillsChartBar;
