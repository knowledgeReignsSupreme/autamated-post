import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { Item } from '../ts/Item';

export function useFetchItems(
  setHasError: React.Dispatch<React.SetStateAction<boolean>>,
  pageNumber: number
): Item[] {
  const [items, setItems] = useState<Item[]>([]);

  const fetchItems = useCallback(async () => {
    try {
      setHasError(false);
      const { data } = await axios.get('items');

      setItems(data);
    } catch (error) {
      setHasError(true);
    }
  }, [setHasError]);

  useEffect(() => {
    fetchItems();
  }, [fetchItems]);

  return items;
}
