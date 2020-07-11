import React, { useState, useEffect } from 'react';
import ResumeItem from './ResumeItem';
import ResumeService from '../Services/ResumeService';

const Resumes = prop => {
  const [oldResumes, setOldResumes] = useState([]);
  const [currentResume, setCurrentResume] = useState([]);

  useEffect(() => {
    ResumeService.getCurrentResume().then(data => {
      setCurrentResume(data.resumes);
    });

    ResumeService.getOldResumes().then(data => {
      setOldResumes(data.resumes);
    });
  }, []);

  return (
    <section id="resume" className="section-content bg2">
      <div className="container">
        <div className="row justify-content-center">
          {/* <!-- Section title --> */}
          <div className="section-title item_bottom text-center">
            <div>
              <span className="fa fa-book fa-2x"></span>
            </div>
            <h1>Resume</h1>
          </div>
          {/* <!-- End Section title --> */}
        </div>
        <div className="row justify-content-center timeline">
          <h3 className="title">Present</h3>
        </div>
        {currentResume.map(resume => {
          return <ResumeItem key={resume._id} resume={resume} />;
        })}
        <div className="row justify-content-center timeline">
          <h3 className="title">Previous Employment</h3>
        </div>
        {oldResumes.map(resume => {
          return <ResumeItem key={resume._id} resume={resume} />;
        })}
        <div className="row justify-content-center timeline">
          <h3 className="title">Education</h3>
        </div>
        <div className="row justify-content-center timeline">
          <div className="note">
            <h4>Bootcamp</h4>
            <h5>UCF</h5>
            <p className="desc">Comprehensive Full-Stack coding bootcamp</p>
            <span className="date"> 2019 - 2019 </span>
          </div>
        </div>
        <div className="row justify-content-center timeline">
          <div className="note">
            <h4>High School Diploma</h4>
            <h5>Wekiva High School</h5>
            <p className="desc">High School diploma</p>
            <span className="date"> 2012 - 2016 </span>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="section-title item_bottom text-center">
            <div>
              <span className="start fa fa-bookmark"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resumes;
