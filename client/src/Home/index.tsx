import React from 'react';
import styled from 'styled-components';
import Header from './Header';

const Home: React.FC = () => {
  return (
    <StyledHome>
      <Header />
    </StyledHome>
  );
};

const StyledHome = styled.main``;

export default Home;
