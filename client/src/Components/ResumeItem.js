import React from 'react';

const ResumeItem = props => {
  return (
    <div className="row justify-content-center timeline">
      <div className="note">
        <h4>{props.resume.company}</h4>
        <h5>{props.resume.title}</h5>
        <p className="desc">{props.resume.description}</p>
        <span className="date">{props.resume.dates}</span>
      </div>
    </div>
  );
};

export default ResumeItem;
