import 'babel-polyfill'
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import WeatherApp from './containers/WeatherApp';
import configureStore from './store/configureStore'
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

const store = configureStore();

render(
  <Provider store={store}>
    <WeatherApp/>
  </Provider>,
  document.getElementById('app')
);
