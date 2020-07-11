import React from 'react';
// maybe i need to load all sub components in this file?

const About = () => {
  return (
    <section id="about" className="section-content bg2">
      <div className="container">
        <div className="row justify-content-center">
          <div className="section-title item_bottom text-center">
            <div>
              <span className="fa fa-user fa-2x"></span>
            </div>
            <h1>About Me</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 text-center item_bottom">
            <img
              src="assets/img/bioimage.jpg"
              className="img-center img-responsive"
              alt="Personal Photo"
            />
            <div className="name-title">
              <h2>Benjamin Morrow</h2>
              <h5>Full Stack Web Developer</h5>
            </div>
          </div>
          <div className="col-md-4 item_top">
            <h3>
              Hello, I am an aspiring full stack web developer currently
              enrolled in the UCF Full Stack Bootcamp.
            </h3>
            <h4 className="text-center">Profecient Skills</h4>
            <div className="row text-center">
              <div className="col-md-6">
                <ul style={{ listStyleType: 'none', padding: '0px 0px' }}>
                  <li>Node.JS</li>
                  <li>Bootstrap</li>
                  <li>jQuery</li>
                  <li>React</li>
                </ul>
              </div>
              <div className="col-md-6">
                <ul style={{ listStyleType: 'none', padding: '0px 0px' }}>
                  <li>MongoDB</li>
                  <li>Mongoose</li>
                  <li>Express</li>
                  <li>Materalize</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-4 item_bottom clearfix">
            <ul className="fa-ul">
              <li>
                <i className="fa fa-li fa-mobile"></i>
                <strong>Phone</strong> : (321)961-9634
              </li>
              <li>
                <i className="fa fa-li fa-envelope-o"></i>
                <strong>E-Mail</strong> :
                <a href="mailto:morrowbenjamin42@gmail.com">
                  morrowbenjamin42@gmail.com
                </a>
              </li>
              <li>
                <i className="fa fa-li fa-linkedin"></i>
                <strong>LinkedIn</strong> :
                <a href="https://linkedin.com/in/morrowbenjamin">
                  morrowbenjamin
                </a>
              </li>
              <li>
                <i className="fa fa-li fa-github-square"></i>
                <strong>GitHub</strong> :
                <a href="https://github.com/TheResinger">TheResinger</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
