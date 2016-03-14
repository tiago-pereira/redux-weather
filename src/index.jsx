import React from 'react';
import ReactDOM from 'react-dom';
import WeatherApp from './components/WeatherApp';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducer';
import {setClientId, setState, setConnectionState} from './actions_creator';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

const store = createStore(reducer);
store.dispatch({
    type: 'SET_INITIAL_FILTER',
    filter: {
      city: 'Blumenau',
      state: 'SC'
    }
});

ReactDOM.render(
  <Provider store={store}>
    <WeatherApp/>
  </Provider>,
  document.getElementById('app')
);
