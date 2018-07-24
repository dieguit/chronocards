import React from 'react';
import styled from 'styled-components';
import { Header } from 'semantic-ui-react';

const AppHeader = ({className}) => (
  <div className={className}>
    <Header as="h1">Chrono Cards</Header>
    <span>ALPHA</span>
  </div>
);

const styledHeader = styled(AppHeader)`
  h1 {
    display: inline-block;
  }

  span {
    font-family: 'Orbitron';
    display: inline-block;
    margin-left: 10px;
  }
`;

export default styledHeader;
