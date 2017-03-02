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

import createSagaMiddleware from 'redux-saga';
import {sagas} from './sagas/index';

import './stylesheets/main.scss';
// import { store } from "./store.js";
// import { router } from "./router.js";

const sagaMiddleware = createSagaMiddleware();
let middleware = applyMiddleware(routerMiddleware(browserHistory), sagaMiddleware);
if (process.env.NODE_ENV !== 'production') {
  middleware = compose(middleware, window.devToolsExtension && window.devToolsExtension());
}
const store = createStore(reducers, middleware);
const history = syncHistoryWithStore(browserHistory, store);
sagaMiddleware.run(sagas);

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
