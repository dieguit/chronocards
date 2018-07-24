import { setDisplayName, withStateHandlers, withHandlers, compose } from 'recompose';

export default compose(
  setDisplayName('TimeHandler'),
  withStateHandlers(
    ({ timer }) => ({
      incrementer: null,
      lastIncrementer: null,
      secondsElapsed: timer.secondsElapsed,
      isRunning: false,
      isEdditing: false,
    }),
    {
      increaseSeconds: ({ secondsElapsed }) => () => ({ secondsElapsed: secondsElapsed + 1 }),
      setRunningState: () => (incrementer, isRunning) => ({ incrementer, isRunning }),
      toggleEditMode: ({ isEdditing }) => () => ({ isEdditing: !isEdditing }),
    }
  ),
  withHandlers({
    handleClick: ({
      isRunning,
      incrementer,
      increaseSeconds,
      setRunningState,
      updateTimer,
      timerId,
      secondsElapsed,
      timer,
    }) => () => {
      if (isRunning) {
        clearInterval(incrementer);
        setRunningState(null, false);
      } else {
        const incrementer = setInterval(() => increaseSeconds(), 1000);
        setRunningState(incrementer, true);
      }
      updateTimer(timerId, { ...timer, secondsElapsed });
    },
    handleInputChange: ({ timerId, timer, updateTimer }) => (e, { name, value }) => {
      updateTimer(timerId, { ...timer, [name]: value });
    },
  })
);
