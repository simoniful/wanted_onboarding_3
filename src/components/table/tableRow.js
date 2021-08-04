import React, { useState, useEffect } from 'react';

const TableRow = ({ key, data }) => {
  const [RowData, setRowData] = useState(data);

  return (
    <>
      <tr key={key}>
        <td>{RowData.name}</td>
        <td>{RowData.age}</td>
        <td> {RowData.address}</td>
        <td>{RowData.creditCard}</td>
      </tr>
    </>
  );
};

export default TableRow;
