import React from 'react';
import emailjs from 'emailjs-com';
import '../../styles/Contact/ContactForm.css';
import '../../styles/Contact/Notification.css';

const ERROR_COLOR = 'darkred';
const SUCCESS_COLOR = 'seagreen';
const DEFAULT_COLOR = 'white';
const EMAILJS = {
  serviceID: "service_9f9vlv4", templateID: "template_44jvtev", userID: "user_mpWlmEMAB7oBK0MOeathl"
};
const ERROR_MESSAGE = 'Cannot send email. Please contact directly to bartlomiej.orawiec@gmail.com';
const SUCCESS_MESSAGE = 'Message was sent successfully';
const INVALID_DATA = {name: 'Enter your name', email: 'Invalid email address', message: 'Enter your message'};
// eslint-disable-next-line
const EMAIL_REG_EXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


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

  borderColor = (className, color) => document.getElementsByClassName(className)[0].style.borderColor = color;

  showFieldError(className, errorMessage) {
    this.borderColor(className, ERROR_COLOR);
    this.displayNotification(errorMessage, ERROR_COLOR);
  }

  validateFields() {
    this.state.message
      ? this.borderColor("message", DEFAULT_COLOR)
      : this.showFieldError("message", INVALID_DATA.message);

    EMAIL_REG_EXP.test(String(this.state.email).toLowerCase())
      ? this.borderColor("email", DEFAULT_COLOR)
      : this.showFieldError("email", INVALID_DATA.email)

    this.state.name
      ? this.borderColor("name", DEFAULT_COLOR)
      : this.showFieldError("name", INVALID_DATA.name);

    return (EMAIL_REG_EXP.test(String(this.state.email).toLowerCase())
      && this.state.name && this.state.message);
  }

  handleSubmit(success) {
    success ? this.displayNotification(SUCCESS_MESSAGE, SUCCESS_COLOR)
      : this.displayNotification(ERROR_MESSAGE, ERROR_COLOR);
  }

  sendMessage(event) {
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
      .send(EMAILJS.serviceID, EMAILJS.templateID, templateParams, EMAILJS.userID)
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
      <div id="contact-form">
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
          {text
            ? <div className="notification" style={{backgroundColor: color, borderColor: color}}>
              {text}
              <div onClick={() => this.setState({notification: {}})} className="exit">{}</div>
            </div>
            : null}
          <input
            id="send-button"
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