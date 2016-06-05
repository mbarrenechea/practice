import { createDevTools } from 'redux-devtools'
import LogMonitor from 'redux-devtools-log-monitor'
import DockMonitor from 'redux-devtools-dock-monitor'


import React from 'react';
import {render} from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

import * as reducers from './reducers';

import {AppView, HomeView, ShowView, NewView} from './containers';
// import Home from './containers/home.jsx';


const reducer = combineReducers({
  ...reducers,
  routing: routerReducer
});

const DevTools = createDevTools(
  <DockMonitor toggleVisibilityKey="ctrl-h" changePositionKey="ctrl-q">
    <LogMonitor theme="tomorrow" preserveScrollTop={false} />
  </DockMonitor>
);

const store = createStore(
  reducer,
  DevTools.instrument(),
  applyMiddleware(thunk)
);

const history = syncHistoryWithStore(browserHistory, store);


render(
  <Provider store={store}>
    <div>
      <Router history={history}>
        <Route path="/" component={AppView}>
          <IndexRoute component={HomeView}/>
          <Route path="list" component={HomeView}/>
          <Route path="users/new" component={NewView}/>
        </Route>
      </Router>
      <DevTools />
    </div>
  </Provider>,
  document.getElementById('app')
)
