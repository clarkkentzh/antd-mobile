import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router,Route} from 'react-router-dom';
// import registerServiceWorker from './registerServiceWorker';
import createBrowserHistory from "history/createBrowserHistory";

const history = createBrowserHistory();
ReactDOM.render(
  <Router history={history}>
    <Route path="/" component={App}></Route>
  </Router>,
  document.getElementById('root'));
// registerServiceWorker();
