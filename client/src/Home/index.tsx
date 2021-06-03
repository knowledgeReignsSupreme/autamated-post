import React from 'react';
import styled from 'styled-components';
import Benefis from './Benefits';
import ContactUs from './ContactUs';
import Header from './Header';

const Home: React.FC = () => {
  return (
    <StyledHome>
      <Header />
      <StyledSeperator></StyledSeperator>
      <Benefis />
      <StyledSeperator></StyledSeperator>
      <ContactUs />
    </StyledHome>
  );
};

const StyledHome = styled.main``;

const StyledSeperator = styled.div`
  height: 32px;
`;

export default Home;
