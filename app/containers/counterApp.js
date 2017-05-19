/**
 * Sample React Native App
 * @flow
*/
import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import Counter from '../components/counter';
import * as counterActions from '../actions/counterActions';
import { connect } from 'react-redux';

class CounterApp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { state, actions } = this.props;
    return (
      <Counter
        counter={state.count}
        {...actions} />
    );
  }
}

function mapStateToProps(state) {
  return {
    state: state.counter
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions:
    bindActionCreators(counterActions, dispatch)
  };
}

export default connect((state) => mapStateToProps, (dispatch) => mapDispatchToProps )(CounterApp);
