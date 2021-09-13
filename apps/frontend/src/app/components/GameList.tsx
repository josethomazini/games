import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import styled from 'styled-components';
import getGameData from '../../GameData';

const Container = styled.div`
  grid-area: GAME_LIST;
  display: flex;
  flex-direction: column;
  align-items: left;
  background-color: var(--primary);
  box-shadow: rgba(0, 0, 0, 0.2) 0 1px 0 0;
  z-index: 2;
  overflow-y: scroll;
  max-height: calc(100vh - 70px - 70px);
  padding: 20px 0;

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

  .game-card {
    margin: 5px;
    background-color: var(--quaternary);
    color: var(--white);
    flex-shrink: 0;
  }
`;

const GameList: React.FC = () => (
  <>
    <Container className="container">
      {
        getGameData().map((curGameData) => (
          <Card
            id={curGameData.key}
            className="game-card"
          >

            <CardActionArea>
              <CardMedia
                className="game-card-media"
                image={curGameData.image}
                title={curGameData.name}
              />

              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h2"
                >
                  {curGameData.name}
                </Typography>

                <Typography
                  variant="subtitle1"
                  component="p"
                >
                  {curGameData.version}
                </Typography>

              </CardContent>

            </CardActionArea>

          </Card>
        ))
      }
    </Container>
  </>
);

export default GameList;
