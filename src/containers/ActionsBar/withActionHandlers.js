import { connect } from 'react-redux';
import { timerOperations } from '../../state/modules/timer';

export default connect(
  null,
  {
    addTimer: timerOperations.addTimer,
  }
);
