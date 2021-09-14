import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  grid-area: GAME_AREA;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.2) 0 1px 0 0;
  z-index: 2;
  max-height: calc(100vh - 70px);
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: var(--tertiary);
    border-radius: 4px;
  }
  ::-webkit-scrollbar-track {
    background-color: var(--primary);
  }
`;

const GameArea: React.FC = () => (
  <Container>
    <div id="gameCanvas" />
  </Container>
);

export default GameArea;
