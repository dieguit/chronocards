import types from './types';

export const updateTimer = (id, timer) => ({
  type: types.UPDATE_TIMER,
  id,
  timer,
});

export const addTimer = () => ({
  type: types.ADD_TIMER,
});

export const removeTimer = (id) => ({
  type: types.REMOVE_TIMER,
  id,
});

export default { updateTimer, addTimer, removeTimer };
