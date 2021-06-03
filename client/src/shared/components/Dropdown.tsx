import React from 'react';
import {
  FaBoxes,
  FaBoxOpen,
  FaHome,
  FaSignOutAlt,
  FaUser,
} from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { colorsVariables } from '../../GlobalStyle';

interface DropdownProps {
  show: boolean;
}

interface LinkData {
  text: string;
  icon: any;
  linkTo: string;
}

const Dropdown: React.FC<DropdownProps> = ({ show }) => {
  const links: LinkData[] = [
    { text: 'Home', icon: <FaHome />, linkTo: '/' },
    { text: 'Parcels', icon: <FaBoxes />, linkTo: '/parcels' },
    { text: 'Items', icon: <FaBoxOpen />, linkTo: '/items/page/1' },
    { text: 'Sagi T.', icon: <FaUser />, linkTo: '/profile' },
    { text: 'Logout', icon: <FaSignOutAlt />, linkTo: '/logout' },
  ];

  return !show ? null : (
    <StyledDropdown>
      {links.map((link) => (
        <NavLink exact={true} key={link.text} to={link.linkTo}>
          {link.icon} {link.text}
        </NavLink>
      ))}
    </StyledDropdown>
  );
};

const StyledDropdown = styled.div`
  width: 2000px;
  max-width: 95%;
  margin: 0 auto;
  margin-bottom: 1rem;
  padding: 0.5rem 0;
  display: flex;
  flex-direction: column;

  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
  background: ${colorsVariables.grayish};

  a + a {
    margin-top: 0.5rem;
  }

  svg {
    color: ${colorsVariables.secondaryDark};
  }
  a {
    padding-left: 1rem;
    &:hover {
      color: ${colorsVariables.main};
    }
  }

  .active {
    color: ${colorsVariables.main};
    font-weight: bold;
  }
`;

export default Dropdown;
