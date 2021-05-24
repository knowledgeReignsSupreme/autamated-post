import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { colorsVariables } from '../../GlobalStyle';

interface TabsProps {
  tabs: { text: string; link: string }[];
}

const Tabs: React.FC<TabsProps> = ({ tabs }) => {
  const { pathname } = useLocation();

  return (
    <StyledTabs>
      {tabs.map((tab) => (
        <NavLink
          key={tab.link}
          to={tab.link}
          isActive={() => pathname?.includes(tab.text)}
        >
          {tab.text}
        </NavLink>
      ))}
    </StyledTabs>
  );
};

const StyledTabs = styled.div`
  a {
    text-decoration: none;
    padding: 0.2rem 0.4rem;
    color: ${colorsVariables.white};
  }

  a + a {
    margin-left: 0.5rem;
  }
`;

export default Tabs;
