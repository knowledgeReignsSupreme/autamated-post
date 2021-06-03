import React from 'react';
import styled from 'styled-components';
import { colorsVariables } from '../../GlobalStyle';

interface ButtonProps {
  text?: string;
  icon?: any;
}

interface StyleProps {
  color: string;
  bgColor: string;
}

type Props = StyleProps & ButtonProps;

const determineColor = (color: string) => {
  return colorsVariables[color];
};

const Button: React.FC<Props> = ({ text, icon, color, bgColor }) => {
  return (
    <StyledButton
      color={determineColor(color)}
      bgColor={determineColor(bgColor)}
    >
      {icon && icon} {text && text}
    </StyledButton>
  );
};

const StyledButton = styled.button<StyleProps>`
  box-shadow: 0 7px 5px rgba(0, 0, 0, 0.5);
  padding: 0.4rem 0.6rem;
  transition: all 0.4s ease-out;
  font-weight: bold;
  &:hover {
    opacity: 0.75;
    padding: 0.4rem 0.9rem;
  }

  color: ${({ color }) => color};

  background: ${({ bgColor }) => bgColor};

  svg {
    margin-left: 0.3rem;
    vertical-align: middle;
  }
`;

export default Button;
