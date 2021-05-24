import React from 'react';
import { NavLink } from 'react-router-dom';

interface TabsProps {
  tabs: { text: string; link: string }[];
}

const Tabs: React.FC<TabsProps> = ({ tabs }) => {
  return (
    <div>
      {tabs.map((tab) => (
        <NavLink to={tab.link}>{tab.text}</NavLink>
      ))}
    </div>
  );
};

export default Tabs;
