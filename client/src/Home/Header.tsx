import React from 'react';
import styled from 'styled-components';
import documentSvg from '../media/document.svg';
import containers from '../media/containers.jpg';
import { colorsVariables } from '../GlobalStyle';

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <Content>
        <Text>
          <h1>Israel Post</h1>
          <h2>Track parcels and explore products</h2>
          <button>Show me</button>
          <button>Don't Show me</button>
        </Text>
        <DocumentSvg height={300} width={300} opacity={'0.8'} />
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

export default Header;

interface DocumentSvgProps {
  height: number;
  width: number;
  opacity: string;
}

const DocumentSvg: React.FC<DocumentSvgProps> = ({
  width,
  height,
  opacity,
}) => {
  return (
    <>
      <img
        src={documentSvg}
        alt='document'
        height={height}
        width={width}
        style={{ opacity }}
      />
    </>
  );
};
