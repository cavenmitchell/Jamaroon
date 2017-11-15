import React, { Component } from 'react';

class NameInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: ''
    };
  }

  render() {
    return <input value={this.state.name} onChange={ event=> this.setState({ name: event.target.value })} />;
  }
}

export default NameInput;
