import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { getDataByRoute } from '../../../GameData';
import GameArea from './GameArea';
import Header from './Header';

const Grid = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 70px auto;
  grid-template-areas:
    'HEADER'
    'GAME_AREA';
  height: 100vh;
`;

const Layout: React.FC = () => {
  const location = useLocation();
  const element = getDataByRoute(location.pathname);

  useEffect(() => {
    element.callable();
  });

  return (
    <Grid>
      <Header name={`${element.name}`} />
      <GameArea />
    </Grid>
  );
};

export default Layout;
