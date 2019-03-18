import React, { Component } from 'react';

import { projects } from './project-data';

import './Projects.css';

class Projects extends Component {

  render() {

    const showcase = projects.map( (project, i) => {
      return (
        <div className="project-card" key={i}>
          <div className="project-card-top">
            <img className="project-card-top-img" src={project.preview} alt="Card image cap"/>
            <div className="img-overlay"></div>
          </div>
          <div className="project-card-body">
            <h3 className="project-card-title">{project.name}</h3>
            <p className="project-card-text">{project.tagline}</p>
            <div className="learn-more">
              {/* <NavLink to={`/projects/${project.name}`} exact className="learn-more-link">View Project</NavLink> */}
              { project.url && <a className="learn-more-link" href={project.url} target="_blank">View Project</a> || <a className="learn-more-link" href="/contact">Contact Me</a> }
            </div>
          </div>
        </div>
      )
    })
    return (
      <div className="projects">
        <h2 className="projects-header">Some of my <span>recent projects</span></h2>
        <div className="projects-content">
          {showcase}
        </div>
      </div>
    )
  }
}

export default Projects;