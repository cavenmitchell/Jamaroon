import React, { Component } from 'react';

class EmailInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      address: ''
    };
  }

  render() {
    return <input value={this.state.address} onChange={ event=> this.setState({ address: event.target.value })} />;
  }

  // this is undefined for some reason
  // onInputChange(event) {
  //   this.setState({ address: event.target.value });
  // }
}

export default EmailInput;
