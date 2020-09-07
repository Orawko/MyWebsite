import React, {Fragment} from 'react';
import '../../styles/Projects/Projects.css';
import {projects} from "../../Data/Projects";

import ProjectTile from "./ProjectTile";

const Projects = () => {
  const switchPopUp = data => alert(data);

  const TILE_WIDTH = window.innerWidth < 1024 ? 300 : 400;

  const numberOfTilesInRow = (function () {
    const tileMargin = window.innerWidth / 100;
    return Math.floor(window.innerWidth / (TILE_WIDTH + (tileMargin * 2)));
  })();

  const BreakingProjectTile = tileData => {
    console.log("je");
    return <Fragment key={tileData.title}>
      {ProjectTile(tileData, switchPopUp)}
      <div className="break">{}</div>
    </Fragment>
  }

  return <div id="projects">
    <h1 id="projects-title">Projects</h1>
    <div id="projects-tiles">
      {projects.map((p, index) => {
        console.log(numberOfTilesInRow - 1);
        console.log(index % numberOfTilesInRow === (numberOfTilesInRow - 1));
        return index % numberOfTilesInRow === (numberOfTilesInRow - 1)
          ? BreakingProjectTile(p)
          : ProjectTile(p)
      })}
    </div>
  </div>;
}

export default Projects;
