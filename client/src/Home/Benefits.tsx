import React from 'react';
import { FaCog, FaUserClock, FaServer } from 'react-icons/fa';
import styled from 'styled-components';
import { colorsVariables } from '../GlobalStyle';
interface Benefit {
  header: string;
  text: string;
  icon: any;
}

const Benefis: React.FC = () => {
  const benefits: Benefit[] = [
    {
      header: 'Take advantage of technology',
      text: 'Use a smart system to keep track and manage parcels',
      icon: <FaCog />,
    },
    {
      header: 'Cut labor costs',
      text: 'Our smart system will save you lots of money spent on unnecessary labor costs',
      icon: <FaUserClock />,
    },
    {
      header: 'Use servers, not paperwork',
      text: 'No more paperwork, Our cloud servers will keep your workflow and data organized',
      icon: <FaServer />,
    },
  ];
  return (
    <StyledBenefits>
      <h2>Why use our service?</h2>
      <BenefitsWrapper>
        {benefits.map((benefit) => (
          <StyledBenefit>
            {benefit.icon}
            <h3>{benefit.header}</h3>
            <p>{benefit.text}</p>
          </StyledBenefit>
        ))}
      </BenefitsWrapper>
    </StyledBenefits>
  );
};

const StyledBenefits = styled.div`
  h2 {
    margin-bottom: 16px;
    color: ${colorsVariables.secondaryDark};
    text-align: center;
  }
`;

const BenefitsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 2rem;
  width: 100%;
`;

const StyledBenefit = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 300px;
  flex-grow: 1;
  align-items: center;
  margin: 0 auto;
  text-align: center;

  h3 {
    margin-bottom: 0.2rem;
  }

  svg {
    color: ${colorsVariables.main};
    margin-bottom: 0.5rem;
    width: 3rem;
    height: 3rem;
  }
`;

export default Benefis;
