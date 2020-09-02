import React from 'react';
import '../../styles/Contact/ContactForm.css';

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
    };
  }

  handleInputChange(event) {
    event.preventDefault();
    const target = event.target;
    const name = target.name;
    const value = target.value;
    this.setState({[name]: value});
  }

  render() {
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
            // error={this.state.errors.email}
            style={{width: "100%"}}
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
          <input
            id="sendButton"
            type="button"
            value="Send"
            className="ui button"
            // onClick={this.sendMessage.bind(this)}
          />
        </form>
      </div>
    );
  };
}

export default ContactForm;