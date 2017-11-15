import React from 'react';

const MenuItem = ({item}) => {
  return (
    <a href={item.url}>
      <li>{item.title}</li>
    </a>
  );
};

export default MenuItem;