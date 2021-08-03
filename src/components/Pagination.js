import React, { useCallback, useEffect, useState } from 'react';

const Pagination = ({ userDataPerPage, totalUserData, paginate, currentPage }) => {
  const [pageNumbers, setPageNumbers] = useState([]);

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

  useEffect(() => {
    const nextPageNumbers = Array.from(
      { length: Math.ceil(totalUserData / userDataPerPage) },
      (v, i) => i + 1,
    );

    setPageNumbers(nextPageNumbers);
  }, [totalUserData, userDataPerPage]);

  return (
    <div>
      <p onClick={() => goEdgePage(1)}>{'|<'}</p>
      <p onClick={() => goNextToPage(currentPage - 1)}>{'<'}</p>
      <ul>
        {pageNumbers.map((number) => (
          <li key={number} active={currentPage === number}>
            <p onClick={() => paginate(number)}>{number}</p>
          </li>
        ))}
      </ul>
      <p onClick={() => goNextToPage(currentPage + 1)}>{'>'}</p>
      <p onClick={() => goEdgePage(Math.ceil(totalUserData / userDataPerPage))}>{'>|'}</p>
    </div>
  );
};

export default Pagination;
