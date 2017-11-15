import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Bio from './components/bio';
import ContactHeadline from './components/contact_headline';
import ContactPostButton from './components/contact_post_button';
import EmailInput from './components/email_input';
import MenuList from './components/menu_list';
import MessageInput from './components/message_input';
import NameHeadline from './components/name_headline';
import NameInput from './components/name_input';
import ProfilePhoto from './components/profile_photo';
import SocialMediaList from './components/social_media_list';
import VisitButton from './components/visit_button';


// Create a new component. This component should produce some html
class App extends Component {
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

// Take this component's generated html and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
