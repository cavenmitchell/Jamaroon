import React from 'react';

const SocialMediaItem = ({account}) => {
  const faClassName = `fa fa-${account.name}`;
  
  return (
    <a href={account.url}><li className={faClassName} aria-hidden="true" /></a>
  );
};

export default SocialMediaItem;