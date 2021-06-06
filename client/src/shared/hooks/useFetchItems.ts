import { useQuery } from '@apollo/client';
import axios from 'axios';
import gql from 'graphql-tag';
import { useCallback, useEffect, useState } from 'react';
import {
  Item,
  ItemData,
  ItemDataVars,
  PaginationData,
  PaginatedItemsData,
} from '../ts/Item';

const GET_ITEMS = gql`
  query ($pageNumber: Float!) {
    items(pageNumber: $pageNumber) {
      data {
        itemName
        frequency
      }
      totalPages
      page
      totalItems
    }
  }
`;

export function useFetchItems(
  setHasError: React.Dispatch<React.SetStateAction<boolean>>,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
  pageNumber: number
): [Item[], PaginationData] {
  const { loading, data, error } = useQuery<PaginatedItemsData, ItemDataVars>(
    GET_ITEMS,
    {
      variables: { pageNumber: pageNumber },
    }
  );

  // const [result, setResult] = useState<ItemData>();
  const [items, setItems] = useState<Item[]>([] as any);
  const [paginationData, setPaginationData] = useState<PaginationData>(
    {} as PaginationData
  );

  useEffect(() => {
    if (loading) {
      setIsLoading(true);
    }

    if (error) {
      setHasError(true);
    }

    if (data) {
      setIsLoading(false);
      const { page, totalPages, totalItems } = data.items;
      setPaginationData({ page, totalItems, totalPages });
      setItems(data.items.data);
    }
  }, [data, error, loading, setIsLoading, setHasError]);

  return [items, paginationData];

  // const [paginationData, setPaginationData] = useState<PaginationData>(
  //   {} as PaginationData
  // );
  // const [items, setItems] = useState<Item[]>([]);

  // const fetchItems = useCallback(async () => {
  //   try {
  //     setIsLoading(true);
  //     setHasError(false);
  //     const { data } = await axios.get(`/items/${pageNumber}`);

  //     setPaginationData({
  //       totalPages: data.totalPages,
  //       page: data.page,
  //       totalItems: data.totalItems,
  //     });

  //     setItems(data?.data);
  //     setIsLoading(false);
  //   } catch (error) {
  //     setIsLoading(false);
  //     setHasError(true);
  //   }
  // }, [setHasError, pageNumber, setIsLoading]);

  // useEffect(() => {
  //   fetchItems();
  // }, [fetchItems]);

  // return [items, paginationData];
}
