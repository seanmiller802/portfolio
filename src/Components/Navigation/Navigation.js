import React from 'react';

import NavList from './NavList';

import Sean from './Avatar';

import './Navigation.css';

const Navigation = (props) => {

  const { handleSidebar } = props;

  return (
    <div className="navbar">
      <div className="navbar-title">
      <Sean />
      </div>
      <div className="navbar-toggle" onClick={handleSidebar}>
        <i className="fas fa-bars"></i>
      </div>
      <NavList listClassName="nav-items" itemClassName="nav-item" />
    </div>
  )
}

export default Navigation;