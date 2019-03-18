import React, { Component, Fragment } from 'react';

import './Contact.css';
import ContactSidebar from './ContactSidebar/ContactSidebar';

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showContactSidebar: false,
      bacon: [],
    }
  }

  handleSidebar = () => {
    this.setState({
      showContactSidebar: !this.state.showContactSidebar
    })
  }

  rainBacon = async () => {

    const { bacon } = this.state;

    const random = Math.floor(Math.random() * 9) + 1;

    this.setState({
      bacon: [...bacon, random]
    })
    
  }
  
  render() {
    const { showContactSidebar, bacon } = this.state;

    const baconRain = bacon.map((i) => {
      return (
        <i key={i} className={`fas fa-bacon rain${i}`}></i>
      )
    });

    return (
      <Fragment>
      <div className="contact">
      {baconRain}
        <div className="contact-content">
          <h2>How you can <span id="skills-highlight">get in touch</span></h2>
          <div id="contact-main">
            <ul className="contact-list">
              <li>
                <i className="fas fa-envelope contact-list-icon"></i> 
                <a onClick={this.handleSidebar}>
                  <span className="contact-list-text">miller.stowe@gmail.com</span>
                </a>
              </li>
              <li>
                <i className="fab fa-github contact-list-icon"></i> 
                <a href="https://github.com/seanmiller802" target="_blank">
                  <span className="contact-list-text">seanmiller802</span>
                </a>
              </li>
              <li>
                <i className="fab fa-medium contact-list-icon"></i> 
                <a href="https://medium.com/@miller.stowe" target="_blank">
                  <span className="contact-list-text">@miller.stowe</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="side-tabs">
              <div className="side-tab-1" onClick={this.handleSidebar}>
                <i className="fas fa-comment"></i>
                <span>Say Hello</span>
              </div>
              <div className="side-tab-2" onClick={this.rainBacon}>
                <i className="fas fa-bacon"></i>
                <span id="rain-bacon">Rain Bacon</span>
              </div>
            </div>
            <ContactSidebar handleSidebar={this.handleSidebar} visibility={showContactSidebar ? 'visible' : 'hidden'} />
        </div>
      </div>
      </Fragment>
    )
  }
  
}

export default Contact;