import React from 'react';

const ProjectItem = props => {
  return (
    <article>
      <img src={props.project.imageurl} alt="project" />
      <div className="overlay">
        <div className="item-info">
          <h4>{props.project.projectname}</h4>
          <h3>
            App Link :&nbsp;
            <a href={props.project.deploylink} rel="noopener noreferrer" target="_blank">
              Link
            </a>
          </h3>
          <h3>
            GitHub :&nbsp; 
            <a href={props.project.githublink} rel="noopener noreferrer" target="_blank">
              Link
            </a>
          </h3>
        </div>
      </div>
    </article>
  );
};

export default ProjectItem;
