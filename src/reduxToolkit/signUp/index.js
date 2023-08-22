import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { name as appName } from './app.json';
import App from '../../../App';
import store from './store'; // Import your configured store

const ReduxApp = () => (
  <Provider store={store}>
    <App/>
  </Provider>
);

AppRegistry.registerComponent(appName, () => ReduxApp);
