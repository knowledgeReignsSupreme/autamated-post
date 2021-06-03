import React from 'react';
import styled from 'styled-components';
import work from '../media/work.svg';
import containers from '../media/containers.jpg';
import { colorsVariables } from '../GlobalStyle';
import Button from '../shared/components/Buttons';

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <Content>
        <Text>
          <h1>Smart Post</h1>
          <h2>Track parcels and explore products</h2>
          <Buttons>
            <Button text='Show Parcels' color='main' bgColor='white' />
            <Button text='Show Products' color='dark' bgColor='white' />
          </Buttons>
        </Text>
        <img
          src={work}
          alt='document'
          height={300}
          width={300}
          style={{ opacity: '0.8' }}
        />
      </Content>
    </StyledHeader>
  );
};

const StyledHeader = styled.div`
  position: relative;
  min-height: 18rem;

  @media (min-width: 600px) {
    min-height: 25rem;
  }

  @media (min-width: 1200px) {
    margin: 0 auto;
  }

  &::after {
    content: '';
    background: url(${containers}) no-repeat center center/cover;
    opacity: 0.15;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1;
    min-height: 18rem;
    box-shadow: 0 7px 2px rgba(0, 0, 0, 0.3);
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding-top: 1rem;
`;

const Text = styled.div`
  h1 {
    font-size: 3rem;
    color: ${colorsVariables.main};
  }

  @media (max-width: 850px) {
    margin-bottom: 1rem;
  }
`;

const Buttons = styled.div`
  margin-top: 1rem;
  button + button {
    margin-left: 0.5rem;
  }
`;

export default Header;
