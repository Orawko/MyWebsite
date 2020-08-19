import React, {Fragment} from 'react';

const ProjectTile = projectData => {
  return <Fragment>
    <div className="projectTile">
      <img src={projectData.img} alt={projectData.title}/>
      <h3>{projectData.title}</h3>
    </div>
  </Fragment>;
}

export default ProjectTile;
