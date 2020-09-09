import React from 'react';
import '../../styles/About/SkillsChart.css';
import SkillsChartBar from "./SkillsChartBar";

const SkillsChart = (title, data) => {
  return <div id="skills-chart" data-aos="fade-left" data-aos-once="true" data-aos-delay="300">
    <h2 id="skills-chart-title">{title}</h2>
    <div id="chart-bars">
      {Object.entries(data).map(pair => SkillsChartBar(pair))}
    </div>
  </div>;
}

export default SkillsChart;
