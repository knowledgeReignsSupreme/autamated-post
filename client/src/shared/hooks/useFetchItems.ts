import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { Item } from '../ts/Item';

export function useFetchItems(
  setHasError: React.Dispatch<React.SetStateAction<boolean>>,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
  pageNumber: number
): [Item[], PaginationData] {
  const [paginationData, setPaginationData] = useState<PaginationData>(
    {} as PaginationData
  );
  const [items, setItems] = useState<Item[]>([]);

  const fetchItems = useCallback(async () => {
    try {
      setIsLoading(true);
      setHasError(false);
      const { data } = await axios.get(`/items/${pageNumber}`);

      setPaginationData({
        totalPages: data.totalPages,
        page: data.page,
        totalItems: data.totalItems,
      });

      setItems(data?.data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setHasError(true);
    }
  }, [setHasError, pageNumber, setIsLoading]);

  useEffect(() => {
    fetchItems();
  }, [fetchItems]);

  return [items, paginationData];
}

interface PaginationData {
  totalPages: number;
  page: number;
  totalItems: number;
}
