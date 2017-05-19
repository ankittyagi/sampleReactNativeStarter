/**
 * Sample React Native App
 * @flow
*/
import React, {Component} from 'react';
import { Provider } from 'react-redux';


import CounterApp from './containers/counterApp';
import store from './store';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <CounterApp />
      </Provider>
    );
  }
}
