import React from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import styled from 'styled-components';
import { colorsVariables } from '../GlobalStyle';
import machine from '../media/machine.jpg';
import Button from '../shared/components/Button';

interface WrapperStyle {
  deviceWidth: number;
}

interface Field {
  label: string;
  type: 'string' | 'number';
}

const ContactUs: React.FC = () => {
  const deviceWidth: number = window.innerWidth;

  const fields: Field[] = [
    { label: 'Full name', type: 'string' },
    { label: 'Company name', type: 'string' },
    { label: 'Phone number', type: 'number' },
  ];

  return (
    <Wrapper>
      <h2>Contant Us</h2>
      <Form deviceWidth={deviceWidth}>
        <Content
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          {fields.map((field) => (
            <StyledInput>
              <label>{`${field.label}:`}</label>
              <input type={field.type} placeholder={field.label} />
            </StyledInput>
          ))}

          <Button
            color='white'
            bgColor='secondaryDark'
            text='Send'
            icon={<FaPaperPlane />}
          />
        </Content>
      </Form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  h2 {
    color: ${colorsVariables.secondaryDark};
    text-align: center;
  }
`;

const Form = styled.div<WrapperStyle>`
  width: 100% !important;
  margin-top: 1rem !important;
  background: #eb01a5;
  min-height: 15rem;
  background: ${(props) =>
    props.deviceWidth > 800
      ? `linear-gradient(125deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.9) 45%, transparent 0px), url(${machine}) `
      : `linear-gradient(125deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.9) 70%, transparent 0px), url(${machine}) `};

  background-position: center;
  background-size: 100%;
  background-size: cover;
  border-radius: 3px;

  p span {
    font-weight: bold;
  }

  @media (min-width: 1200px) {
    width: 80%;
    margin: 0 auto;
  }
`;

const Content = styled.form`
  max-width: 40% !important;
  padding: 1rem;
`;

const StyledInput = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 0.5rem;

  label {
    margin-bottom: 0.3rem;
    font-weight: bold;
  }

  input {
    width: 80%;
    border: 1px solid ${colorsVariables.main};
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 600px) {
    input {
      min-width: 170%;
    }
    p {
      white-space: normal;
      width: 170% !important;
    }
  }

  @media (min-width: 601px) and (max-width: 900px) {
    input {
      min-width: 100%;
    }
  }
`;

export default ContactUs;
