import React from 'react';

const TableData = ({ TableData }) => {
  return (
    <>
      {TableData
        ? TableData.map((data) => (
            <tr key={data.id}>
              <td>{data.id}</td>
              <td>{data.name}</td>
              <td>{data.age}</td>
              <td>{data.address}</td>
              <td>{data.cardNumber}</td>
              <td>{data.userType}</td>
            </tr>
          ))
        : null}
    </>
  );
};
export default TableData;
