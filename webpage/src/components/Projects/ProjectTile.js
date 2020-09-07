import React, {useContext} from 'react';
import {PopUpContext} from "../../providers/PopUpProvider";

const ProjectTile = (projectData) => {
  const {setPopUpData, displayPopUp} = useContext(PopUpContext);

  return <div className="project-tile" key={projectData.title}>
    <div className="tile-cover">
      <h3 className="tile-title">{projectData.title}</h3>
      <div className="tile-buttons">
        {projectData.website
          ? <a target="_blank" rel="noopener noreferrer" href={projectData.website}>
            <div className="tile-button"><i className="icon-eye"/></div>
          </a>
          : null}
        <div className="tile-button" onClick={() => {
          setPopUpData(projectData);
          displayPopUp(true);
        }}>
          <i className="icon-info"/></div>
        {projectData.code
          ? <a target="_blank" rel="noopener noreferrer" href={projectData.code}>
            <div className="tile-button"><i className="icon-code"/></div>
          </a>
          : null}
      </div>
    </div>
    <img src={require(`../../img/project_icons/${projectData.img}`)} alt={projectData.title}/>
  </div>;
}

export default ProjectTile;