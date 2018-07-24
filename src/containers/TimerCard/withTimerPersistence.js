import { connect } from 'react-redux';
import { timerOperations } from '../../state/modules/timer';

export default connect(
  null,
  {
    updateTimer: timerOperations.updateTimer,
    removeTimer: timerOperations.removeTimer,
  }
);
