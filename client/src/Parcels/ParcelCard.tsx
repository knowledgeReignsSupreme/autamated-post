import React, { useState } from 'react';
import styled from 'styled-components';
import { colorsVariables } from '../GlobalStyle';
import { Parcel } from '../shared/ts/Parcel';

interface ParcelCardProps {
  parcel: Parcel;
}

const removeFileExtention = (fileName: string): string => {
  return fileName.split('.')[0];
};

const limitTextShown = (text: string, isTextLimited: boolean): string => {
  return isTextLimited ? `${text.slice(0, 136)}...` : text;
};

const ParcelCard: React.FC<ParcelCardProps> = ({ parcel }) => {
  const { id, text } = parcel;

  const [isTextLimited, setIsTextLimited] = useState<boolean>(true);

  return (
    <StyledParcel>
      <h3>Parcel no.{removeFileExtention(id.toString())}</h3>
      <Text>
        <p>
          {limitTextShown(text, isTextLimited)}{' '}
          <button onClick={() => setIsTextLimited(!isTextLimited)}>
            {isTextLimited ? 'Show more' : 'Show less'}
          </button>
        </p>
      </Text>
      <Actions>
        <button>Delete</button>
        <button>Update</button>
      </Actions>
    </StyledParcel>
  );
};

const StyledParcel = styled.div`
  box-shadow: '0 7px 5px rgba(0, 0, 0, 0.2)';
  padding: 1rem 0.2rem;
`;

const Text = styled.div`
  button {
    color: ${colorsVariables.textBold};
    font-weight: bold;

    &:hover {
      color: ${colorsVariables.main};
    }
  }
`;

const Actions = styled.div``;

export default ParcelCard;
