/**
 * Sample React Native App
 * @flow
*/
import * as types from '../actions/actionTypes';
import createReducer from './createReducer';

const initialState = {
  count: 0
};
export const counter = createReducer({count: 0}, {
  [types.INCREMENT](state, action) {
    return {
      ...state,
      count: state.count + 1
    };
  },
  [types.DECREMENT](state, action) {
    return {
      ...state,
      count: state.count - 1
    };
  },
});

/*  This is replaced with createReducer helper function that prevent switch statements
    Done because I dont like switch :-)

export default function counter(state = initialState, action = {}) {
  switch (action.type) {
    case types.INCREMENT:
      return {
        ...state,
        count: state.count + 1
      };
    case types.DECREMENT:
      return {
        ...state,
        count: state.count - 1
      };
    default:
      return state;
  }
}

*/
