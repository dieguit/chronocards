import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Container, Segment } from 'semantic-ui-react';
import Header from '../Header';
import ActionsBar from '../../containers/ActionsBar';
import TimerList from '../../containers/TimerList';

const App = () => (
  <Container className="App">
    <Segment.Group>
      <Segment>
        <Header />
      </Segment>
      <Segment>
        <ActionsBar />
      </Segment>
      <Segment>
        <TimerList />
      </Segment>
    </Segment.Group>
  </Container>
);

export default App;
