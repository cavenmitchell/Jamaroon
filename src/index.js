import React from 'react';
import { render } from 'react-dom';
import { browserHistory, Router, Route, IndexRoute } from 'react-router'
import { Provider } from 'react-redux';
import { addLocaleData, IntlProvider } from 'react-intl';
import fetch from 'isomorphic-fetch';
import acceptLanguage from 'accept-language';
import cookieParser from 'cookie-parser';
import Cookie from 'js-cookie';

import App from './components/app';
import Home from './components/home';
import About from './components/about';
import Features from './components/features';
import reducers from './reducers';

acceptLanguage.languages(['en', 'ja', 'jp']);
const locale = Cookie.get('locale') || 'ja';

fetch(`./src/assets/translations/${locale}.json`)
  .then((res) => {
    if (res.status >= 400) {
      throw new Error('Bad response from server');
    }
    return res.json();
  })
  .then((localeData) => {
    addLocaleData(locale);

    render(
      <IntlProvider locale={locale}>
        <Router history={browserHistory}>
          <Route path='/' component={App}>
            <IndexRoute component={Home} />
            <Route path='about' component={About} />
            <Route path='features' component={Features} />
          </Route>
        </Router>
      </IntlProvider>,
      document.querySelector('.container')
    );
  })
  .catch((error) => {
    console.error(error);
  });
