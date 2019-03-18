import React, { Component } from 'react';
import './ContactForm.css';
import FormMessage from './FormMessage';

const emailjs = require('emailjs-com');

class Form extends Component {
  constructor(props) {
    super(props);

    this.state ={
      from: '',
      message: '',
      email: '',
    };

  }

  handleFromChange = (e) => {
    this.setState({
      from: e.target.value,
    });
  }

  handleEmailChange = (e) => {
    this.setState({
      email: e.target.value,
    });
  }

  handleMessageChange = (e) => {
    this.setState({
      message: e.target.value,
    });
  }

  sendEmail = () => {

    this.setState({ loading: true });

    const { from, email, message } = this.state;

    const templateParams = {
      from,
      email,
      email_body: message,
    };

    emailjs
    .send(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, templateParams, process.env.REACT_APP_USER_ID)
    .then(data => {
      this.setState({ 
        loading: false, 
        from: '',
        message: '',
        email: ''
      });
    })
    .catch(e => {
      this.setState({
        error: "Something went wrong. Please try again.",
        loading: false,
      })
      return false;
    }) 

    return true;
  }

  checkForErrors = () => {
    
    const { from, email, message } = this.state;

    if(from === '' || message === '' || email === '') {
      return true;
    }

    return false;
  }

  handleSubmit = async (e) => {

    e.preventDefault();

    const errors = await this.checkForErrors();
    
    if(errors) {
      this.setState({
        error: "Please make sure none of the fields are empty."
      });
      return;
    }

    const sent = await this.sendEmail();

    if(sent) {
      this.setState({ 
        success: 'Message successfully sent!',
        error: null
      })
      setTimeout(() => { this.props.onSuccess(); }, 1500);
    }

  }

  render() {
    const { error, success, loading } = this.state

    const buttonText = loading ? 'Sending...' : 'Submit';
    
    return (
      <div className="contact-form">
        <h2 id="contact-form-title">leave a message</h2>
        <form action="" method="post" className="form">
          <div>
            <input type="text" name="from" placeholder="Your Name" className="form-input" id="from" value={this.state.from} onChange={this.handleFromChange} />
          </div>
          <div>
            <input type="text" name="email" placeholder="Your Email" className="form-input" id="email" value={this.state.email} onChange={this.handleEmailChange} />
          </div>
          <div>
            <textarea rows="5" name="message" placeholder="Your Message" className="form-input" id="message" value={this.state.message} onChange={this.handleMessageChange} />
          </div>
          <FormMessage error={error} success={success} />
          <div>
            <a href="#" className="contact-submit" onClick={this.handleSubmit}>{buttonText}</a>
          </div>
        </form>
      </div>
    )
  }
}

export default Form;