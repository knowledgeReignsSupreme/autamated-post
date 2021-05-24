import React, { useState } from 'react';
import styled from 'styled-components';
import { colorsVariables } from '../GlobalStyle';
import { Parcel } from '../shared/ts/Parcel';
import { FaTrash } from 'react-icons/fa';

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
`;

const Text = styled.div`
  button {
    color: ${colorsVariables.textBold};
    font-weight: bold;
  }
`;

const Actions = styled.div`
  margin-top: 1rem;

  button {
    border: 1px solid ${colorsVariables.textBold};
    padding: 0.2rem 0.4rem;
  }

  svg {
    margin-right: 0.3rem;
  }
`;

export default ParcelCard;
