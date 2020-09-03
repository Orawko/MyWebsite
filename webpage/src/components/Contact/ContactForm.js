import React from 'react';
import emailjs from 'emailjs-com';
import '../../styles/Contact/ContactForm.css';
import '../../styles/Contact/Notification.css';

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
      notification: {},
    };
  }

  handleInputChange(event) {
    event.preventDefault();
    const target = event.target;
    const name = target.name;
    const value = target.value;
    this.setState({[name]: value});
  }

  displayNotification(text, color) {
    this.setState({
      notification:
        {
          text: `${text}`,
          color: `${color}`
        }
    });
  }

  showFieldError(className, errorMessage) {
    document.getElementsByClassName(className)[0].style.borderColor = "darkred";
    this.displayNotification(errorMessage, "darkred");
  }

  validateFields() {
    const emailRegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    this.state.message
      ? document.getElementsByClassName("message")[0].style.borderColor = "white"
      : this.showFieldError("message", "Enter your message");

    emailRegExp.test(String(this.state.email).toLowerCase())
      ? document.getElementsByClassName("email")[0].style.borderColor = "white"
      : this.showFieldError("email", "Invalid email address")

    this.state.name
      ? document.getElementsByClassName("name")[0].style.borderColor = "white"
      : this.showFieldError("name", "Enter your name");

    return (emailRegExp.test(String(this.state.email).toLowerCase()) && this.state.name && this.state.message);
  }

  handleSubmit(success) {
    success ? this.displayNotification("Message was sent successfully.", "seagreen")
      : this.displayNotification("Cannot send email. Please contact directly to bartlomiej.orawiec@gmail.com", "darkred");
  }

  sendMessage(event) {
    console.log(this.state);
    let success = true;
    event.preventDefault();
    if (!this.validateFields()) {
      return;
    }
    const templateParams = {
      user_name: this.state.name,
      user_email: this.state.email,
      message: this.state.message
    };
    emailjs
      .send("service_9f9vlv4__", "template_44jvtev", templateParams, "user_mpWlmEMAB7oBK0MOeathl")
      .then(
        function (response) {
          success = true;
          console.log(response);
        },
        function (err) {
          success = false;
          console.log(err);
        }
      ).then(() => this.handleSubmit(success));
    this.setState({
      name: "",
      email: "",
      message: ""
    });
  }


  render() {
    const {text, color} = this.state.notification;
    return (
      <div id="contactForm">
        <form
          className="ui form"
          id={this.props.id}
          name={this.props.name}
          method={this.props.method}
          action={this.props.action}
        >
          <input
            className="field name"
            name="name"
            onChange={this.handleInputChange.bind(this)}
            placeholder="Your name"
            required
            value={this.state.name}
          />
          <br/>
          <input
            className="field email"
            name="email"
            onChange={this.handleInputChange.bind(this)}
            placeholder="Your email"
            required
            value={this.state.email}
          />
          <br/>
          <textarea
            className="field message"
            name="message"
            onChange={this.handleInputChange.bind(this)}
            placeholder="Message"
            required
            value={this.state.message}
          />
          <br/>
          {text ?
            <div className="notification" style={{backgroundColor: color, borderColor: color}}>
              {text}
              <div onClick={() => this.setState({notification: {}})} className="exit">{}</div>
            </div> : null}
          <input
            id="sendButton"
            type="button"
            value="Send"
            className="ui button"
            onClick={this.sendMessage.bind(this)}
          />
        </form>
      </div>
    );
  };
}

export default ContactForm;