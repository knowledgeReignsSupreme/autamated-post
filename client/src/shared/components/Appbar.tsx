import React from 'react';
import styled from 'styled-components';

const Appbar: React.FC = () => {
  return (
    <StyledNav>
      <InnerNav>
        <Logo>Israel Post</Logo>
      </InnerNav>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  width: 100%;
  display: flex;
`;

const InnerNav = styled.div`
  width: 2000px;
  max-width: 95%;
  margin: 0 auto;
  text-align: left;
`;

const Logo = styled.h3``;

export default Appbar;
