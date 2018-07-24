import { combineReducers } from 'redux';
import { v4 } from 'node-uuid';
import { omit } from 'ramda';
import types from './types';

const defaultTimer = {
  title: 'New Timer',
  meta: 'Some Description',
  secondsElapsed: 0,
  color: 'black',
};

const defaultTimerId = v4();

const defaultState = {};
defaultState[defaultTimerId] = defaultTimer;

const list = (state = defaultState, action) => {
  switch (action.type) {
    case types.UPDATE_TIMER:
      return { ...state, [action.id]: action.timer };
    case types.ADD_TIMER: {
      const newTimer = Object.assign({}, defaultTimer);
      const newId = v4();
      return { ...state, [newId]: newTimer };
    }
    case types.REMOVE_TIMER:
      return omit([action.id], state);
    default:
      return state;
  }
};

export default combineReducers({
  list,
});
