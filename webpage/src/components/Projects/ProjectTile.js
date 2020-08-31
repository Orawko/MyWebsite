import React, {useContext} from 'react';
import {PopUpContext} from "../../providers/PopUpProvider";

const ProjectTile = (projectData) => {
  const {setPopUpData, displayPopUp} = useContext(PopUpContext);

  return <div className="projectTile" key={projectData.title}>
    <div className="tileCover">
      <h3 className="tileTitle">{projectData.title}</h3>
      <div className="tileButtons">
        {projectData.website
          ? <a target="_blank" rel="noopener noreferrer" href={projectData.website}>
            <div className="tileButton"><i className="icon-eye"/></div>
          </a>
          : null}
        <div className="tileButton" onClick={() => {
          setPopUpData(projectData);
          displayPopUp(true);
        }}>
          <i className="icon-info"/></div>
        {projectData.code
          ? <a target="_blank" rel="noopener noreferrer" href={projectData.code}>
            <div className="tileButton"><i className="icon-code"/></div>
          </a>
          : null}
      </div>
    </div>
    <img src={require(`../../img/${projectData.img}`)} alt={projectData.title}/>
  </div>;
}

export default ProjectTile;