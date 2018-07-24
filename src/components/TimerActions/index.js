import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';

const TimerActions = ({ color, timerId, toggleEditMode, removeTimer }) => [
  <Button key="edit" icon="edit" color={color} onClick={toggleEditMode} />,
  <Button key="remove" icon="trash" color="red" onClick={() => removeTimer(timerId)} />,
];

TimerActions.propTypes = {
  color: PropTypes.string.isRequired,
  timerId: PropTypes.string.isRequired,
  toggleEditMode: PropTypes.func.isRequired,
  removeTimer: PropTypes.func.isRequired,
};

export default TimerActions;
