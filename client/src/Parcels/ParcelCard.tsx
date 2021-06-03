import React, { useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import styled from 'styled-components';
import { colorsVariables } from '../GlobalStyle';
import Button from '../shared/components/Button';
import { Parcel } from '../shared/ts/Parcel';

interface ParcelCardProps {
  parcel: Parcel;
}

const ParcelCard: React.FC<ParcelCardProps> = ({ parcel }) => {
  const { id, text } = parcel;

  const removeFileExtention = (fileName: string): string => {
    return fileName.split('.')[0];
  };

  const textIsLong = text.length > 140;

  const limitTextShown = (text: string, isTextLimited: boolean): string => {
    return isTextLimited && textIsLong ? `${text.slice(0, 136)}...` : text;
  };

  const [isTextLimited, setIsTextLimited] = useState<boolean>(true);

  return (
    <StyledParcel>
      <h3>Parcel no.{removeFileExtention(id.toString())}</h3>
      <Text>
        <p>
          {limitTextShown(text, isTextLimited)}
          {textIsLong && (
            <button onClick={() => setIsTextLimited(!isTextLimited)}>
              {isTextLimited ? 'Show more' : 'Show less'}
            </button>
          )}
        </p>
      </Text>
      <Actions>
        <Button
          text='Edit'
          icon={<FaEdit />}
          color='secondaryDark'
          bgColor='transparent'
        />
        <Button
          icon={<FaTrash />}
          text='Delete'
          color='danger'
          bgColor='transparent'
        />
      </Actions>
    </StyledParcel>
  );
};

const StyledParcel = styled.div`
  box-shadow: 0 7px 5px rgba(0, 0, 0, 0.5);
  padding: 1rem 0.4rem;
  margin-bottom: 1rem;

  h3 {
    margin-bottom: 0.3rem;
  }

  button:hover {
    color: ${colorsVariables.main};
  }

  &:nth-of-type(even) {
    background: #fff6f6;
  }
`;

const Text = styled.div`
  button {
    color: ${colorsVariables.textBold};
    font-weight: bold;
  }
`;

const Actions = styled.div`
  margin-top: 1rem;
  button + button {
    margin-left: 0.3rem;
  }
`;

export default ParcelCard;
