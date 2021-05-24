import React from 'react';
import styled from 'styled-components';
import { colorsVariables } from '../../GlobalStyle';
import Tabs from './Tabs';

const Appbar: React.FC = () => {
  const tabs = [
    { link: '/parcels', text: 'Parcels' },
    { link: '/items/page/1', text: 'Items' },
  ];

  return (
    <StyledNav>
      <InnerNav>
        <Logo>Israel Post</Logo>
        <Tabs tabs={tabs} />
      </InnerNav>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  width: 100%;
  display: flex;
  background: ${colorsVariables.main};
  margin-bottom: 1rem;
`;

const InnerNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  width: 2000px;
  max-width: 95%;
  padding: 0.5rem 0;
`;

const Logo = styled.h2`
  color: ${colorsVariables.white};
`;

export default Appbar;
