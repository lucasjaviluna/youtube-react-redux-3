import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";

import {createStore, applyMiddleware, compose} from 'redux';
import {reducers} from './reducers/index';
import App from './components/App';
import { Provider } from "react-redux";

import {syncHistoryWithStore, routerMiddleware} from 'react-router-redux';
import {browserHistory, Router, Route, IndexRoute} from 'react-router';

import Home from './pages/Home';
import UserEdit from './pages/UserEdit';
import NotFound from './pages/NotFound';

import './stylesheets/main.scss';
// import { store } from "./store.js";
// import { router } from "./router.js";
//
// // render the main component
// ReactDOM.render(
//   <Provider store={store}>
//     {router}
//   </Provider>,
//   document.getElementById('app')
// );

let users = [];
for (let i=1; i<10; i++) {
  users.push({
    id: i,
    username: 'Lucas ' + i,
    job: 'Employee ' + i
  });
}
const initial_state = {
  users: {
    list: users
  }
};

let middleware = applyMiddleware(routerMiddleware(browserHistory));
if (process.env.NODE_ENV !== 'production') {
  middleware = compose(middleware, window.devToolsExtension && window.devToolsExtension());
}
const store = createStore(reducers, initial_state, middleware);
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="/user-edit(/:id)" component={UserEdit}/>
        <Route path="*" component={NotFound}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
