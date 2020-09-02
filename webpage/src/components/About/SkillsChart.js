import React from 'react';
import '../../styles/About/SkillsChart.css';
import SkillsChartBar from "./SkillsChartBar";

const SkillsChart = (title, data) => {
  return <div id="skillsChart">
    <h2 id="skillsChartTitle">{title}</h2>
    <div id="chartBars">
      {Object.entries(data).map(pair => SkillsChartBar(pair))}
    </div>
  </div>;
}

export default SkillsChart;
