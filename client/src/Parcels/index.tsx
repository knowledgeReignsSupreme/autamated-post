import React, { useState } from 'react';
import styled from 'styled-components';
import { useFetchParcels } from '../shared/hooks/useFetchParcels';
import ParcelCard from './ParcelCard';

const Parcels: React.FC = () => {
  const [hasError, setHasError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const parcels = useFetchParcels(setHasError, setIsLoading);
  const isEmpty = !isLoading && parcels?.length === 0;

  return (
    <StyledParcels>
      <h2>All Parcels:</h2>
      {isLoading ? (
        <h3>Loading..</h3>
      ) : hasError ? (
        <h3>An error has occured. Please try again</h3>
      ) : isEmpty ? (
        <h3>No parcels to show.</h3>
      ) : (
        parcels &&
        parcels.map((parcel) => <ParcelCard key={parcel.id} parcel={parcel} />)
      )}
    </StyledParcels>
  );
};

const StyledParcels = styled.main`
  margin-top: 1rem;
`;

export default Parcels;
