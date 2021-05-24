import React, { useState } from 'react';
import { useParams } from 'react-router';
import styled from 'styled-components';
import Pagination from '../shared/components/Pagination';
import { useFetchItems } from '../shared/hooks/useFetchItems';
import ItemCard from './ItemCard';

const Items: React.FC = () => {
  const { pageNumber } = useParams<{ pageNumber: string }>();

  const [hasError, setHasError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [items, paginationData] = useFetchItems(
    setHasError,
    setIsLoading,
    +pageNumber
  );

  const isEmpty = !isLoading && items.length === 1;

  return (
    <ItemsPage>
      <StyledItems>
        <h3>Items:</h3>
        {isLoading ? (
          <h3>Loading..</h3>
        ) : hasError ? (
          <h3>An error has occured. Please try again</h3>
        ) : isEmpty ? (
          <h3>No items to show.</h3>
        ) : (
          !isLoading &&
          !isEmpty && (
            <>
              <h4>Total items: {paginationData.totalItems}</h4>
              {items.map((item) => (
                <ItemCard key={item.itemName} item={item} />
              ))}
            </>
          )
        )}
      </StyledItems>
      <Pagination totalPages={paginationData.totalPages} page={+pageNumber} />
    </ItemsPage>
  );
};

const ItemsPage = styled.main``;

const StyledItems = styled.div`
  h4 {
    margin-bottom: 1rem;
  }
`;

export default Items;
