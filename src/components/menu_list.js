import React, { Component } from 'react';
import MenuItem from './menu_item';

const MenuList = () => {
  const menuItems = [{
      title: 'top',
      url: '#top'
    }, {
      title: 'album',
      url: '#album'
    }, {
      title: 'profile',
      url: '#profile'
    }, {
      title: 'contact',
      url: '#contact'
    }, {
      title: 'blog',
      url: ''
    }]
    .map((item) => {
      return <MenuItem key={item.title} item={item} />
    });

  return (
    <div className="menu-list col-md-12">
      <ul className="col-md-4 list-group">
        {menuItems}
      </ul>
    </div>
  );
};

export default MenuList;
