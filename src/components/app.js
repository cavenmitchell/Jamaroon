import React, { Component } from 'react';

import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';

import Bio from './bio';
import ContactHeadline from './contact_headline';
import ContactPostButton from './contact_post_button';
import EmailInput from './email_input';
import MenuList from './menu_list';
import MessageInput from './message_input';
import NameHeadline from './name_headline';
import NameInput from './name_input';
import ProfilePhoto from './profile_photo';
import SocialMediaList from './social_media_list';
import VisitButton from './visit_button';

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware)(createStore);

export default class App extends Component {
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
        <div className="row"><MenuList id="#top"/></div>
        <div className="row">
          <div className="col-md-6">
            <ProfilePhoto />
          </div>
          <div className="col-md-6">
            <NameHeadline />
            <Bio />
            <VisitButton />
            <SocialMediaList socialMedia={this.state.socialMedia} />
          </div>
        </div>
        <hr className="col-md-12" />
        <div className="row">
          <ContactHeadline />
          <NameInput />
          <EmailInput />
          <MessageInput />
          <ContactPostButton />
        </div>
      </div>
    );
  }
}
