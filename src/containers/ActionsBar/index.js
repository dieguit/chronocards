import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';
import withActionHandlers from './withActionHandlers';

const ActionsBar = ({ addTimer }) => (
  <div>
    <Button
      primary
      content="Add timer"
      icon="plus"
      labelPosition="left"
      onClick={() => addTimer()}
    />
  </div>
);

ActionsBar.propTypes = {
  addTimer: PropTypes.func.isRequired,
};

export default withActionHandlers(ActionsBar);
