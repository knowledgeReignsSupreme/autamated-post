import { useEffect, useState } from 'react';
import { Parcel, ParcelData } from '../ts/Parcel';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';

const GET_PARCELS = gql`
  query {
    parcels {
      id
      text
    }
  }
`;

export function useFetchParcels(
  setHasError: React.Dispatch<React.SetStateAction<boolean>>,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
): Parcel[] {
  const [parcels, setParcels] = useState<Parcel[]>([]);

  const { loading, data, error } = useQuery<ParcelData>(GET_PARCELS);

  useEffect(() => {
    if (loading) {
      setIsLoading(true);
    }

    if (error) {
      setHasError(true);
    }

    if (data) {
      setIsLoading(false);
      setParcels(data?.parcels);
    }
  }, [data, error, loading, setHasError, setIsLoading]);

  return parcels;

  // REST API implementaion

  // const [parcels, setParcels] = useState<Parcel[]>([]);

  // const fetchParcels = useCallback(async () => {
  //   try {
  //     setIsLoading(true);
  //     setHasError(false);
  //     const { data } = await axios.get('/parcels');

  //     setParcels(data);
  //     setIsLoading(false);
  //   } catch (error) {
  //     setIsLoading(true);

  //     setHasError(true);
  //   }
  // }, [setHasError, setIsLoading]);

  // useEffect(() => {
  //   fetchParcels();
  // }, [fetchParcels]);

  // return parcels;
}
