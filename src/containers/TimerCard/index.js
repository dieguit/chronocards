import React from 'react';
import PropTypes from 'prop-types';
import { Card, Transition, Segment } from 'semantic-ui-react';
import styled from 'styled-components';
import { compose, pure } from 'recompose';
import TimerClock from '../../components/TimerClock';
import TimerEdit from '../../components/TimerEdit';
import TimerActions from '../../components/TimerActions';
import withTimerHandlers from './withTimerHandlers';
import withTimerPersistence from './withTimerPersistence';

const formattedSeconds = (sec) => Math.floor(sec / 60) + ':' + ('0' + (sec % 60)).slice(-2);

const TimerCard = ({
  className,
  handleClick,
  secondsElapsed,
  isEdditing,
  toggleEditMode,
  removeTimer,
  timerId,
  timer: { title, meta, color },
  handleInputChange,
}) => {
  return (
    <Card className={className} color={color} as={Segment} basic>
      <Card.Content className="main-content" textAlign="center" onClick={handleClick}>
        <Card.Header>{title}</Card.Header>
        <Card.Meta>{meta}</Card.Meta>
        <Card.Description className="clock-timer">
          <TimerClock>{formattedSeconds(secondsElapsed)}</TimerClock>
        </Card.Description>
      </Card.Content>
      <Transition visible={isEdditing} animation="slide up">
        <Card.Content as={Segment} className="timer-edit" color={color} inverted>
          <TimerEdit title={title} meta={meta} handleInputChange={handleInputChange} />
        </Card.Content>
      </Transition>
      <Card.Content extra textAlign="right">
        <TimerActions
          color={color}
          timerId={timerId}
          toggleEditMode={toggleEditMode}
          removeTimer={removeTimer}
        />
      </Card.Content>
    </Card>
  );
};

TimerCard.propTypes = {
  className: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  secondsElapsed: PropTypes.number.isRequired,
  isEdditing: PropTypes.bool.isRequired,
  toggleEditMode: PropTypes.func.isRequired,
  removeTimer: PropTypes.func.isRequired,
  timerId: PropTypes.string.isRequired,
  timer: PropTypes.shape({
    title: PropTypes.string.isRequired,
    meta: PropTypes.string,
    color: PropTypes.string.isRequired,
  }).isRequired,
  handleInputChange: PropTypes.func.isRequired,
};

const style = (Component) => styled(Component)`
  .main-content {
    cursor: pointer;
    height: 100px;
  }
  .timer-edit {
    height: 100px;
    position: absolute;
    width: 100%;
    z-index: 1;
    padding: 5px !important;

    .field {
      margin-bottom: 5px;
    }
  }
  // Ugly fix to sematicUI margin issue.
  .clock-timer {
    margin-top: 20px !important;
  }
`;

export default compose(
  withTimerPersistence,
  withTimerHandlers,
  style,
  pure
)(TimerCard);
