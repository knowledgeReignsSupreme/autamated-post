import React from 'react';
import styled from 'styled-components';
import { Item } from '../shared/ts/Item';

interface ItemCardProps {
  item: Item;
}

const ItemCard: React.FC<ItemCardProps> = ({ item }) => {
  const { itemName, frequency } = item;

  return (
    <StyledItem>
      <h3>Item: {itemName}</h3>
      <p>Frequncy: {frequency}</p>
    </StyledItem>
  );
};

const StyledItem = styled.div`
  max-width: 97%;
  padding: 0.5rem 0.5rem;
  border: 1px solid black;
  margin: 0 auto;
  margin-bottom: 0.5rem;

  p {
    margin-top: 0.3em;
  }

  &:nth-of-type(even) {
    background: #fff6f6;
  }
`;

export default ItemCard;
