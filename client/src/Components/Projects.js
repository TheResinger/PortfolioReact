import React, { useState, useEffect } from 'react';
import ProjectItem from './ProjectItem';
import ProjectService from '../Services/ProjectService';

const Projects = prop => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    ProjectService.getProjects().then(data => {
      setProjects(data.projects);
    });
  }, []);

  return (
    <section id="portfolio" className="section-content bg3">
      <div className="container">
        <div className="row justify-content-center">
          <div className="section-title item_bottom text-center">
            <div>
              <span className="fa fa-briefcase fa-2x"></span>
            </div>
            <h1 className="white">Portfolio</h1>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div id="portfolio-items" className="portfolio-items item_fade_in">
              {projects.map(project => {
                return <ProjectItem key={project._id} project={project} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
