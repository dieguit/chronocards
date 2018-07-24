import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'semantic-ui-react';

const colors = [
  'red',
  'orange',
  'yellow',
  'olive',
  'green',
  'teal',
  'blue',
  'violet',
  'purple',
  'pink',
  'brown',
  'grey',
  'black',
];
const colorOptions = colors.map((color) => ({
  text: color,
  value: color,
  label: { color: color, empty: true, circular: true },
}));

const TimerEdit = ({ title, meta, handleInputChange }) => (
  <Form size="tiny">
    <Form.Group withs="equal">
      <Form.Input value={title} name="title" placeholder="Title" onChange={handleInputChange} />
      <Form.Select
        name="color"
        options={colorOptions}
        placeholder="Pick new color"
        onChange={handleInputChange}
      />
    </Form.Group>
    <Form.Input value={meta} name="meta" placeholder="Description" onChange={handleInputChange} />
  </Form>
);

TimerEdit.propTypes = {
  title: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  meta: PropTypes.string,
};

TimerEdit.defaultProps = {
  meta: '',
};

export default TimerEdit;
