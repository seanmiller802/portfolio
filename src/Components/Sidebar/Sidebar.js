import React from 'react';

import NavList from '../Navigation/NavList';

import './Sidebar.css';

const Sidebar = (props) => {
  return (
    <div id="sidebar" className={props.sidebarOpen ? 'open' : 'closed'}>
      <i className="fas fa-times sidebar-close" onClick={props.handleSidebar}></i>
      <NavList listClassName="sidebar-list" itemClassName="sidebar-list-item" handleSidebar={props.handleSidebar} />
    </div>
  )
}

export default Sidebar;