import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import { colorsVariables } from '../GlobalStyle';

interface PaginationProps {
  totalPages: number;
  page: number;
}

const Pagination: React.FC<PaginationProps> = ({ totalPages, page }) => {
  const history = useHistory();

  const handleNextPage = (): void => {
    history.push(`/items/page/${page + 1}`);
  };

  const handlePrevPage = (): void => {
    history.push(`/items/page/${page - 1}`);
  };

  return (
    <StyledPagination>
      <button disabled={page === 1} onClick={handlePrevPage}>
        <FaArrowLeft />
      </button>

      <p>
        Page {page} of {totalPages}
      </p>
      <button disabled={page >= totalPages} onClick={handleNextPage}>
        <FaArrowRight />
      </button>
    </StyledPagination>
  );
};

const StyledPagination = styled.div`
  max-width: 95%;
  text-align: center;
  margin-top: 1rem;
  white-space: nowrap;
  p {
    margin: 0 0.5rem;
    display: inline-block;
  }

  button:hover {
    color: ${colorsVariables.main};
  }
`;

export default Pagination;
