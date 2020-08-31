import React, {Fragment} from 'react';
import '../../styles/Projects.css';
import ProjectTile from "./ProjectTile";


const projects = [{
  title: "Architecture Portfolio",
  img: "iconArch.jpg",
  website: "https://edytamakowiec.github.io/",
  code: "https://github.com/Orawko/ArchitecturePortfolio",
  info: {
    technologies: ["JS", "React", "RWD"],
    date: "June 2021",
    description: "One page website created for architect student. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum scelerisque sem at orci iaculis, quis imperdiet dui posuere. Donec in arcu at libero hendrerit efficitur. Quisque luctus rutrum commodo. Cras semper ut nulla id maximus."
  }
}, {
  title: "Shape Generator",
  img: "iconArt.jpg",
  website: "https://7verr.csb.app/",
  code: "https://github.com/Orawko/Shape-generator",
  info: {
    technologies: ["JS", "CSS", "HTML"],
    date: "June 2022",
    description: "One page website created for architect student. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum scelerisque sem at orci iaculis, quis imperdiet dui posuere. Donec in arcu at libero hendrerit efficitur. Quisque luctus rutrum commodo. Cras semper ut nulla id maximus."
  }
}, {
  title: "YourGuide - Mobile App",
  img: "iconGuide.jpg",
  website: "",
  code: "",
  info: {
    technologies: ["JS", "React Native", "Node.js"],
    date: "June 2020",
    description: "One page website created for architect student. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum scelerisque sem at orci iaculis, quis imperdiet dui posuere. Donec in arcu at libero hendrerit efficitur. Quisque luctus rutrum commodo. Cras semper ut nulla id maximus."
  }
}]

const Projects = () => {
  const switchPopUp = data => alert(data);

  const TILE_WIDTH = window.innerWidth < 1024 ? 300 : 400;

  const numberOfTilesInRow = (function () {
    const tileMargin = window.innerWidth / 100;
    return Math.floor(window.innerWidth / (TILE_WIDTH + (tileMargin * 2)));
  })();

  const BreakingProjectTile = tileData => <Fragment key={tileData.title}>
    {ProjectTile(tileData, switchPopUp)}
    <div className="break">{}</div>
  </Fragment>

  return <div id="projects">
    <h1 id="projectsTitle">Projects</h1>
    <div id="projectTiles">
      {projects.map((p, index) => {
        return index % numberOfTilesInRow === (numberOfTilesInRow - 1)
          ? BreakingProjectTile(p)
          : ProjectTile(p)
      })}
    </div>
  </div>;
}

export default Projects;
