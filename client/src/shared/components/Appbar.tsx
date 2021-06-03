import React from 'react';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { colorsVariables } from '../../GlobalStyle';
import Tabs from './Tabs';

interface AppBarProps {
  toggleDropdown: () => void;
}

const Appbar: React.FC<AppBarProps> = ({ toggleDropdown }) => {
  const tabs = [
    { link: '/parcels', text: 'Parcels' },
    { link: '/items/page/1', text: 'Items' },
  ];

  return (
    <StyledNav>
      <InnerNav>
        <Logo>
          <Link to='/'>Smart Post</Link>
        </Logo>
        <FaBars onClick={toggleDropdown} />
        {/* <Tabs tabs={tabs} /> */}
      </InnerNav>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  width: 100%;
  display: flex;
  background: ${colorsVariables.main};
`;

const InnerNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  width: 2000px;
  max-width: 95%;
  padding: 0.5rem 0;

  svg {
    color: ${colorsVariables.white};
    width: 2rem;
    height: 100%;
    cursor: pointer;
  }
`;

const Logo = styled.h2`
  color: ${colorsVariables.white};
`;

export default Appbar;
