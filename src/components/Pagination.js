import React, { useCallback, useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import { DATA_PER_PAGE, ONE_WAY_MIN_PAGE_NUM } from 'utils/config';
import { getTotalPageNum } from 'utils/getTotalPageNum';

const PaginationContainer = styled.div`
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

const Pagination = ({ totalDataNum, paginate, currentPage }) => {
  const [pageLists, setPageLists] = useState([]);
  const totalPageNum = useMemo(() => getTotalPageNum(totalDataNum, DATA_PER_PAGE), [totalDataNum]);

  useEffect(() => {
    const totalPageList = Array.from({ length: totalPageNum }, (v, i) => i + 1);

    if (currentPage <= ONE_WAY_MIN_PAGE_NUM) {
      const displayedPageList = totalPageList.slice(0, currentPage + ONE_WAY_MIN_PAGE_NUM - 1);
      setPageLists(displayedPageList);
    } else if (currentPage > ONE_WAY_MIN_PAGE_NUM) {
      const displayedPageList = totalPageList.slice(
        currentPage - ONE_WAY_MIN_PAGE_NUM,
        currentPage + ONE_WAY_MIN_PAGE_NUM - 1,
      );
      setPageLists(displayedPageList);
    }
  }, [totalPageNum, currentPage]);

  const goEdgePage = useCallback(
    (edgePage) => {
      paginate(edgePage);
    },
    [paginate],
  );

  const goNextToPage = useCallback(
    (nextToPage) => {
      if (nextToPage < 1 || nextToPage > totalPageNum) return;
      paginate(nextToPage);
    },
    [paginate, totalPageNum],
  );

  return (
    <PaginationContainer>
      <p onClick={() => goEdgePage(1)}>{'|<'}</p>
      <p onClick={() => goNextToPage(currentPage - 1)}>{'<'}</p>
      <PageUl>
        {pageLists.map((number) => (
          <PageLi key={number} active={currentPage === number}>
            <p onClick={() => paginate(number)}>{number}</p>
          </PageLi>
        ))}
      </PageUl>
      <p onClick={() => goNextToPage(currentPage + 1)}>{'>'}</p>
      <p onClick={() => goEdgePage(totalPageNum)}>{'>|'}</p>
    </PaginationContainer>
  );
};

export default Pagination;
