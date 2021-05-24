import { useCallback, useEffect, useState } from 'react';
import { Parcel } from '../ts/Parcel';
import axios from 'axios';

export function useFetchParcels(
  setHasError: React.Dispatch<React.SetStateAction<boolean>>
): Parcel[] {
  const [parcels, setParcels] = useState<Parcel[]>([]);

  const fetchParcels = useCallback(async () => {
    try {
      setHasError(false);
      const { data } = await axios.get('/parcels');
      console.log(data);
      setParcels(data);
    } catch (error) {
      setHasError(true);
    }
  }, [setHasError]);

  useEffect(() => {
    fetchParcels();
  }, [fetchParcels]);

  return parcels;
}
