import React from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import styled from 'styled-components';
import { colorsVariables } from '../GlobalStyle';
import machine from '../media/machine.jpg';
import Button from '../shared/components/Buttons';

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
    { label: 'Full name:', type: 'string' },
    { label: 'Company name:', type: 'string' },
    { label: 'Phone number:', type: 'number' },
  ];

  return (
    <Wrapper>
      <h2>Contant Us</h2>
      <Form deviceWidth={deviceWidth}>
        <Content>
          {fields.map((field) => (
            <div>
              <label>{field.label}</label>
              <input type={field.type} placeholder={field.label} />
            </div>
          ))}

          <Button
            color='white'
            bgColor='main'
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
  width: 100%;
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

const Content = styled.form``;

export default ContactUs;
