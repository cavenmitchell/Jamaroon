import React, { Component } from 'react';
import SocialMediaItem from './social_media_item';

const SocialMediaList = (props) => {
  const socialMediaItems = props.socialMedia.map((account) => {
    return <SocialMediaItem key={account.name} account={account} />;
  });
  
  return (
    <div className="col-md-12">
      <ul className="list-group">
        {socialMediaItems}
      </ul>
    </div>
  );
};

export default SocialMediaList;