import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';

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

  useEffect(() => {
    const nextPageNumbers = Array.from(
      { length: Math.ceil(totalUserData / userDataPerPage) },
      (v, i) => i + 1,
    );

    setPageNumbers(nextPageNumbers);
  }, [totalUserData, userDataPerPage]);

  const goEdgePage = useCallback(
    (edgePage) => {
      paginate(edgePage);
    },
    [paginate],
  );

  const goNextToPage = useCallback(
    (nextToPage) => {
      if (nextToPage < 1 || nextToPage > Math.ceil(totalUserData / userDataPerPage)) return;
      paginate(nextToPage);
    },
    [paginate, totalUserData, userDataPerPage],
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
      <p onClick={() => goEdgePage(Math.ceil(totalUserData / userDataPerPage))}>{'>|'}</p>
    </PaginationContainer>
  );
};

export default Pagination;
