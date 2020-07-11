import React from 'react';

const ProjectItem = props => {
  return (
    <div className="row justify-content-center timeline">
      <div className="note">
        <h4>{props.resumes.company}</h4>
        <h5>{props.resumes.title}</h5>
        <p className="desc">{props.resumes.description}</p>
        <span className="date">{props.resumes.dates}</span>
      </div>
    </div>
  );
};

export default ProjectItem;
