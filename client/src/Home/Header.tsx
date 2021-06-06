import React from 'react';
import styled from 'styled-components';
import work from '../media/work.svg';
import containers from '../media/containers.jpg';
import { colorsVariables } from '../GlobalStyle';
import Button from '../shared/components/Button';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <Content>
        <Text>
          <h1>Smart Post</h1>
          <h3>cutting-edge parcels management technology</h3>
          <Buttons>
            <Link to='parcels'>
              <Button text='Show Parcels' color='main' bgColor='white' />
            </Link>
            <Link to='items/page/1'>
              <Button text='Show Items' color='dark' bgColor='white' />
            </Link>
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
  justify-content: space-evenly;
  padding: 1rem;

  @media (max-width: 820px) {
    text-align: center;
    flex-direction: column;
    img {
      margin: 0.5rem auto 0;
    }
  }
`;

const Text = styled.div`
  margin-right: 1rem;
  h1 {
    font-size: 3rem;
    color: ${colorsVariables.main};
  }

  @media (max-width: 820px) {
    margin-bottom: 1rem;
  }
`;

const Buttons = styled.div`
  margin-top: 1rem;

  a + a {
    margin-left: 0.5rem;
  }
`;

export default Header;
