import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import store from './store.js';
import { Provider } from 'react-redux';

import App from './App.js';

//import Bootstrap from 'bootstrap/css/bootstrap.css';

document.addEventListener( 'DOMContentLoaded', () => {
  const reactNode =
    document.getElementById('root');

  const history = createBrowserHistory();

  if ( reactNode ) {
    ReactDOM.render((
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    ), reactNode);
  }
});
