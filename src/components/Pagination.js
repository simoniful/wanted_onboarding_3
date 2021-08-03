import React, { useCallback, useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import { DISPLAY_MIN_PAGE_NUM } from 'utils/constants';
import { getTotalPage } from '../utils/getTotalPage';

const PaginationContainer = styled.div`
  max-width: 400px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  & p {
    cursor: pointer;
  }
`;

const PageUl = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const PageLi = styled.li`
  color: ${(props) => (props.active ? '#87bf44' : 'black')};
  text-decoration: ${(props) => (props.active ? 'underline' : 'none')};
  margin: 15px;
  cursor: pointer;
`;

const Pagination = ({ userDataPerPage, totalUserData, paginate, currentPage }) => {
  const [pageNumbers, setPageNumbers] = useState([]);
  const totalPage = useMemo(
    () => getTotalPage(totalUserData, userDataPerPage),
    [totalUserData, userDataPerPage],
  );

  useEffect(() => {
    const nextPageNumbers = Array.from({ length: totalPage }, (v, i) => i + 1);

    if (currentPage <= DISPLAY_MIN_PAGE_NUM) {
      const displayPage = nextPageNumbers.slice(0, currentPage + 2);
      setPageNumbers(displayPage);
    } else if (currentPage > DISPLAY_MIN_PAGE_NUM) {
      const displayPage = nextPageNumbers.slice(currentPage - 3, currentPage + 2);
      setPageNumbers(displayPage);
    }
  }, [totalPage, currentPage]);

  const goEdgePage = useCallback(
    (edgePage) => {
      paginate(edgePage);
    },
    [paginate],
  );

  const goNextToPage = useCallback(
    (nextToPage) => {
      if (nextToPage < 1 || nextToPage > totalPage) return;
      paginate(nextToPage);
    },
    [paginate, totalPage],
  );

  return (
    <PaginationContainer>
      <p onClick={() => goEdgePage(1)}>{'|<'}</p>
      <p onClick={() => goNextToPage(currentPage - 1)}>{'<'}</p>
      <PageUl>
        {pageNumbers.map((number) => (
          <PageLi key={number} active={currentPage === number}>
            <p onClick={() => paginate(number)}>{number}</p>
          </PageLi>
        ))}
      </PageUl>
      <p onClick={() => goNextToPage(currentPage + 1)}>{'>'}</p>
      <p onClick={() => goEdgePage(totalPage)}>{'>|'}</p>
    </PaginationContainer>
  );
};

export default Pagination;
