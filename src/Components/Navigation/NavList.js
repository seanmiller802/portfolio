import React from 'react';
import { NavLink } from 'react-router-dom';

import '../../App.css';

const NavList = (props) => {

  const { listClassName, itemClassName, handleSidebar } = props;
 
  return (
    <nav className={listClassName}>
      <NavLink to="/" exact className={itemClassName} activeClassName="selected" onClick={handleSidebar}>
        <i className="fas fa-map-marker-alt i"></i>
        <span className="nav-item-text">Home</span>
      </NavLink>
      <NavLink to="/projects" exact className={itemClassName} activeClassName="selected" onClick={handleSidebar}>
        <i className="fas fa-code i"></i>
        <span className="nav-item-text">Projects</span>
      </NavLink>
      <NavLink to="/skills" exact className={itemClassName} activeClassName="selected" onClick={handleSidebar}>
        <i className="fas fa-wrench i"></i>
        <span className="nav-item-text">Skills</span>
      </NavLink>
      <NavLink to="/contact" exact className={itemClassName} activeClassName="selected" onClick={handleSidebar}>
          <i className="fas fa-envelope i"></i>
          <span className="nav-item-text">Contact</span>
      </NavLink>
    </nav>
  );

}

export default NavList;


