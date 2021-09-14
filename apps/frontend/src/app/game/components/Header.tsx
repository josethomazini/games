import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  grid-area: HEADER;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 14px;
  background-color: blue;
  color: white;
  box-shadow: rgba(0, 0, 0, 0.2) 0 1px 0 0;
  z-index: 2;

`;

interface Props {
  name: string,
}

const Header: React.FC<Props> = (
  // eslint-disable-next-line react/prop-types
  { name },
) => (
  <>
    <Container>
      <h1>{name}</h1>
    </Container>
  </>
);

export default Header;
