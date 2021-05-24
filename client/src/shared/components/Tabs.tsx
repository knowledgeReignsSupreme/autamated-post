import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

interface TabsProps {
  tabs: { text: string; link: string }[];
}

const Tabs: React.FC<TabsProps> = ({ tabs }) => {
  return (
    <StyledTabs>
      {tabs.map((tab) => (
        <NavLink to={tab.link}>{tab.text}</NavLink>
      ))}
    </StyledTabs>
  );
};

const StyledTabs = styled.div``;

export default Tabs;
