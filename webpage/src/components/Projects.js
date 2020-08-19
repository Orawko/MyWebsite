import React, {Fragment} from 'react';
import '../styles/Projects.css';
import ProjectTile from "./ProjectTile";


const projects = [{
  title: "Architecture Portfolio",
  img: require("../img/iconArch.jpg"),
  website: "https://edytamakowiec.github.io/",
  code: "https://github.com/Orawko/ArchitecturePortfolio",
  info: {
    technologies: ["JS", "React", "RWD"],
    date: "June 2020",
    description: "One page website created for architect student. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum scelerisque sem at orci iaculis, quis imperdiet dui posuere. Donec in arcu at libero hendrerit efficitur. Quisque luctus rutrum commodo. Cras semper ut nulla id maximus."
  }
}, {
  title: "Architecture Portfolio",
  img: require("../img/iconArt.jpg"),
  website: "https://edytamakowiec.github.io/",
  code: "https://github.com/Orawko/ArchitecturePortfolio",
  info: {
    technologies: ["JS", "React", "RWD"],
    date: "June 2020",
    description: "One page website created for architect student. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum scelerisque sem at orci iaculis, quis imperdiet dui posuere. Donec in arcu at libero hendrerit efficitur. Quisque luctus rutrum commodo. Cras semper ut nulla id maximus."
  }
}, {
  title: "Architecture Portfolio",
  img: require("../img/iconGuide.jpg"),
  website: "https://edytamakowiec.github.io/",
  code: "https://github.com/Orawko/ArchitecturePortfolio",
  info: {
    technologies: ["JS", "React", "RWD"],
    date: "June 2020",
    description: "One page website created for architect student. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum scelerisque sem at orci iaculis, quis imperdiet dui posuere. Donec in arcu at libero hendrerit efficitur. Quisque luctus rutrum commodo. Cras semper ut nulla id maximus."
  }
}]

function Projects() {
  const TILE_WIDTH = window.innerWidth < 1024 ? 300 : 400;

  const numberOfTilesInRow = (function () {
    const tileMargin = window.innerWidth / 100;
    return Math.floor(window.innerWidth / (TILE_WIDTH + (tileMargin * 2)));
  })();

  const BreakingProjectTile = tileData => <Fragment>
    {ProjectTile(tileData)}
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
