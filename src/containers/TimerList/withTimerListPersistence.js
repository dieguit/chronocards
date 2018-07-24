import { connect } from 'react-redux';
import { timerSelectors } from '../../state/modules/timer';

export default connect((state) => {
  return {
    timerList: timerSelectors.getTimerList(state),
  };
});
