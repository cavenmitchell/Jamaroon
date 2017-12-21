import React from 'react';
import { render } from 'react-dom';
import { browserHistory, Router, Route, IndexRoute } from 'react-router'

import { Provider } from 'react-redux';

import App from './components/app';
import Home from './components/home';
import About from './components/about';
import Features from './components/features';
import reducers from './reducers';



render(
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <Route path='about' component={About} />
      <Route path='features' component={Features} />
    </Route>
  </Router>,
  document.querySelector('.container')
);
