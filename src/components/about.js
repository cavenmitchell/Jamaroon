import React, { Component } from 'react';

import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware)(createStore);

export default class About extends Component {
  constructor (props) {
    super(props);

    this.state = {
      socialMedia: [{
        name: 'facebook',
        url: ''
      }, {
        name: 'twitter',
        url: ''
      }, {
        name: 'instagram',
        url: ''
      }]
    };
  }

  render () {
    return (
      <div>
        <h1>ABOUT SECTION</h1>
        <hr />
        <div>This is the about section</div>
      </div>
    );
  }
}
