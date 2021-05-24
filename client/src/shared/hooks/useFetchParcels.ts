import { useCallback, useEffect, useState } from 'react';
import { Parcel } from '../ts/Parcel';
import axios from 'axios';

export function useFetchParcels(
  setHasError: React.Dispatch<React.SetStateAction<boolean>>,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
): Parcel[] {
  const [parcels, setParcels] = useState<Parcel[]>([]);

  const fetchParcels = useCallback(async () => {
    try {
      setIsLoading(true);
      setHasError(false);
      const { data } = await axios.get('/parcels');

      setParcels(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(true);

      setHasError(true);
    }
  }, [setHasError, setIsLoading]);

  useEffect(() => {
    fetchParcels();
  }, [fetchParcels]);

  return parcels;
}
