import React from 'react';

import './ContactSidebar.css';
import ContactForm from '../ContactForm/ContactForm';

const ContactSidebar = (props) => {
  return (
    <div id="contact-sidebar" className={props.visibility}>
      <div onClick={props.handleSidebar}>
        <i className="fas fa-times close"></i>
      </div>
      <ContactForm onSuccess={props.handleSidebar} />
    </div>
  )
}

export default ContactSidebar;