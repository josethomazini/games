import { TextField } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import getGameData from '../../GameData';

const Container = styled.div`
  grid-area: GAME_FILTER;
  display: flex;
  align-items: left;
  padding-left: 10px;
  padding-top: 10px;
  background-color: whitesmoke;
  box-shadow: rgba(0, 0, 0, 0.2) 0 1px 0 0;
  z-index: 2;

  .field {
    background-color: var(--primary);
    padding: 5px 5px 5px 5px;
    width: 500px;
    background-color: whitesmoke;
    font: blue;
  }

`;

const GameFilter: React.FC = () => (
  <Container>
    <TextField
      className="field"
      placeholder="Filter game name"
      label="Filter game name"
      onChange={
          (e) => {
            const query = e.currentTarget.value.toLowerCase();
            const gameData = getGameData();

            for (let index = 0; index < gameData.length; index += 1) {
              const { name, key } = gameData[index];
              const element = document.getElementById(key);
              const found = name.toLowerCase().includes(query);

              if (element) {
                element.style.display = found ? '' : 'none';
              }
            }
          }
        }
    />
  </Container>
);

export default GameFilter;
