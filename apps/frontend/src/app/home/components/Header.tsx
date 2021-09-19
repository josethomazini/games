import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  grid-area: HEADER;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 5px;
  background-color: var(--quaternary);
  color: white;
  box-shadow: rgba(0, 0, 0, 0.2) 0 1px 0 0;
  z-index: 2;

`;

const Header: React.FC = () => (
  <Container>
    <h1>GAMES</h1>
  </Container>
);

export default Header;
