import React, { useState } from 'react';
import styled from 'styled-components';
import { colorsVariables } from '../GlobalStyle';
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

export default ParcelCard;
