import React, { useState } from 'react';
import styled from 'styled-components';
import { useFetchItems } from '../shared/hooks/useFetchItems';
import ItemCard from './ItemCard';

const Items: React.FC = () => {
  const [hasError, setHasError] = useState<boolean>(false);

  const [items, paginationData] = useFetchItems(setHasError, 1);

  const isLoading = items && items.length === 0;

  return (
    <StyledItems>
      <h3>Items:</h3>
      {isLoading ? (
        <h3>Loading..</h3>
      ) : hasError ? (
        <h3>An error has occured. Please try again</h3>
      ) : (
        !isLoading && (
          <>
            <h4>Total items: {paginationData.totalItems}</h4>
            {items.map((item) => (
              <ItemCard key={item.itemName} item={item} />
            ))}
          </>
        )
      )}
    </StyledItems>
  );
};

const StyledItems = styled.div`
  width: 2000px;
  max-width: 95%;
  margin: 0 auto;

  h4 {
    margin-bottom: 1rem;
  }
`;

export default Items;
