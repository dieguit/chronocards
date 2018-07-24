import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'semantic-ui-react';
import TimerCard from '../TimerCard';
import withTimers from './withTimerListPersistence';

const TimerList = ({ timerList }) => (
  <Card.Group itemsPerRow="3" stackable>
    {Object.keys(timerList).map((key) => (
      <TimerCard key={key} timerId={key} timer={timerList[key]} />
    ))}
  </Card.Group>
);

TimerList.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  timerList: PropTypes.object.isRequired,
};

export default withTimers(TimerList);
