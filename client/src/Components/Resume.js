import React, { useState, useEffect } from 'react';
import ResumeItem from './ResumeItem';
import ResumeService from '../Services/ResumeService';

const Resumes = prop => {
  const [resumes, setResumes] = useState([]);

  useEffect(() => {
    ResumeService.getResumes().then(data => {
      setResumes(data.resumes);
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
        <div className="row justify-content-center timeline">
          <h3 className="title">Previous Employment</h3>
        </div>
        <div className="row justify-content-center timeline">
          <div className="note">
            <h4>CPH Engineers</h4>
            <h5>Draftsman</h5>
            <p className="desc">
              Civil design engineer tasked with design of site/grading plans
              based off of civil engineers design specifications.
            </p>
            <span className="date"> FEB 2019 to OCT 2019</span>
          </div>
        </div>
        <div className="row justify-content-center timeline">
          <div className="note">
            <h4>Mack Concrete Industries</h4>
            <h5>Draftsman</h5>
            <p className="desc">
              Draftsman tasked with design of FDOT standard structures for
              production.
            </p>
            <span className="date"> OCT 2016 to FEB 2019 </span>
          </div>
        </div>
        {/* <div className="row justify-content-center timeline">
          <div className="note">
            <h4>Placeholder</h4>
            <h5>Placeholder</h5>
            <p className="desc">
              Lorem Ipsum roin gravida nibh vel velit auctor aliquet. Aenean
              sollicitudin, lorem quis bibendum auctor, nisi elit consequat.
              Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit
              auctor aliquet. Aenean sollicitudin, quis bibendum auctor, nisi
              elit consequat.
            </p>
            <span className="date"> Jan 2012 MAY 2012 </span>
          </div>
        </div>  */}
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
