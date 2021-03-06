/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import React from 'react';
import {Provider} from 'react-redux';
import {applyMiddleware, compose, createStore} from 'redux';
import PromiseMiddleware from 'redux-promise';
import reducers from './src/store/reducers';
import {DarkTheme, Provider as PaperProvider} from 'react-native-paper';

const composedEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composedEnhancer(applyMiddleware(PromiseMiddleware)),
);
const ReduxApp = () => (
  <Provider store={store}>
    <PaperProvider>
      <App />
    </PaperProvider>
  </Provider>
);

AppRegistry.registerComponent(appName, () => ReduxApp);
