import React, { Component } from 'react';

class MessageInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: ''
    };
  }

  render() {
    return <input value={this.state.message} onChange={ event=> this.setState({ message: event.target.value })} />;
  }
}

export default MessageInput;
