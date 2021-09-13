import React from 'react';
import styled from 'styled-components';
import GameFilter from './GameFilter';
import GameList from './GameList';
import Header from './Header';

const Grid = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 70px 70px auto;
  grid-template-areas:
    'HEADER'
    'GAME_FILTER'
    'GAME_LIST';
  height: 100vh;
`;

const Layout: React.FC = () => (
  <Grid>
    <Header />
    <GameFilter />
    <GameList />
  </Grid>
);

export default Layout;
