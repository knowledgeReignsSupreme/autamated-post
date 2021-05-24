import React, { useState } from 'react';
import styled from 'styled-components';
import { useFetchParcels } from '../shared/hooks/useFetchParcels';
import ParcelCard from './ParcelCard';

const Parcels: React.FC = () => {
  const [hasError, setHasError] = useState<boolean>(false);
  const parcels = useFetchParcels(setHasError);

  const isLoading = parcels && parcels.length === 0;

  return (
    <StyledParcels>
      <h2>Parcels:</h2>
      {isLoading ? (
        <h3>Loading..</h3>
      ) : hasError ? (
        <h3>An error has occured. Please try again</h3>
      ) : (
        !isLoading &&
        parcels.length >= 1 &&
        parcels.map((parcel) => <ParcelCard key={parcel.id} parcel={parcel} />)
      )}
    </StyledParcels>
  );
};

const StyledParcels = styled.div`
  width: 2000px;
  max-width: 95%;
  margin: 0 auto;
`;

export default Parcels;
