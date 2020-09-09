import React, {Fragment} from 'react';
import '../../styles/Projects/Projects.css';
import {projects} from "../../Data/Projects";

import ProjectTile from "./ProjectTile";

const Projects = () => {
  const switchPopUp = data => alert(data);

  const numberOfTilesInRow = () => {
    if (window.innerWidth < 640) {
      return 1;
    } else if (window.innerWidth < 1440) {
      return 2;
    }
    return 3;
  };

  const BreakingProjectTile = tileData => {
    return <Fragment key={tileData.title}>
      {ProjectTile(tileData, switchPopUp)}
      <div className="break">{}</div>
    </Fragment>
  }

  return <div id="projects">
    <h1 id="projects-title">Projects</h1>
    <div id="projects-tiles">
      {projects.map((p, index) => {
        return index % numberOfTilesInRow() === (numberOfTilesInRow() - 1)
          ? BreakingProjectTile(p)
          : ProjectTile(p)
      })}
    </div>
  </div>;
}

export default Projects;
