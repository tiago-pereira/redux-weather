import React from 'react';
import ReactDOM from 'react-dom';
import WeatherApp from './components/WeatherApp';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

ReactDOM.render(
  <WeatherApp/>,
  document.getElementById('app')
);
