import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      remainingChars: this.props.maxChars,
      value: ''
    };
  }

  handleChange = (event) => {
    console.log(event.key)
    this.setState({ remainingChars: this.state.remainingChars - 1,
    value: event.target.value
    });
  };

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <p>
          you have {this.state.remainingChars}/{this.props.maxChars} Characters
        </p>
        <input
          onChange={this.handleChange}
          type="text"
          name="message"
          id="message"
          value={this.state.value}
        />
      </div>
    );
  }
}

export default TwitterMessage;
