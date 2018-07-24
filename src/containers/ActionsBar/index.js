import React from 'react';
import PropTypes from 'prop-types';
import { Button, Popup, List } from 'semantic-ui-react';
import withActionHandlers from './withActionHandlers';

const todo = [
  'Iterations: Save current state and reset all.',
  'Statics: Use iterations to show statics about time used.',
  'Create mobile version with support for Android and iOS.',
];

const ActionsBar = ({ addTimer }) => (
  <div>
    <Button
      primary
      content="Add timer"
      icon="plus"
      labelPosition="left"
      onClick={() => addTimer()}
    />
    <Popup
      trigger={
        <Button
          content="TO-DO"
          icon="list"
          label={{ as: 'a', basic: true, content: todo.length }}
          labelPosition="right"
          floated="right"
          color="blue"
        />
      }
      position="bottom left"
    >
      <List divided relaxed bulleted>
        {todo.map((item) => <List.Item>{item}</List.Item>)}
      </List>
    </Popup>
    <Button
      as="a"
      href="https://github.com/dieguit/chronocards/issues"
      target="_blank"
      content="Report Bug"
      icon="bug"
      labelPosition="left"
      floated="right"
      color="brown"
    />
    <Button
      as="a"
      href="https://github.com/dieguit/chronocards"
      target="_blank"
      content="Code"
      icon="github"
      labelPosition="left"
      floated="right"
      color="gray"
    />
  </div>
);

ActionsBar.propTypes = {
  addTimer: PropTypes.func.isRequired,
};

export default withActionHandlers(ActionsBar);
