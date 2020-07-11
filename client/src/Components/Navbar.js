import React from 'react';

const NavBar = () => {
  const leftBar = () => {
    return (
      <>
        <li>
          <a data-scroll className="nav-item nav-link" href="#about">
            About
          </a>
        </li>
        <li>
          <a data-scroll className="nav-item nav-link" href="#portfolio">
            Portfolio
          </a>
        </li>
      </>
    );
  };

  const rightBar = () => {
    return (
      <>
        <li>
          <a data-scroll className="nav-item nav-link" href="#resume">
            Resume
          </a>
        </li>
        <li>
          <a data-scroll className="nav-item nav-link" href="#contact">
            Contact
          </a>
        </li>
      </>
    );
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="navbar-collapse collapse w-100 dual-collapse2 order-1 order-md-0">
        <ul className="navbar-nav ml-auto text-center">{leftBar()}</ul>
      </div>
      <div className="my-1"></div>
      <div className="mx-auto my-2 order-0 order-md-1 position-relative">
        <div className="navbar-nav mr-auto text-center">
          <h4>Benjamin Morrow</h4>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target=".dual-collapse2"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
      <div></div>
      <div className="navbar-collapse collapse w-100 dual-collapse2 order-2 order-md-2">
        <ul className="navbar-nav mr-auto text-center">{rightBar()}</ul>
      </div>
    </nav>
  );
};

export default NavBar;
