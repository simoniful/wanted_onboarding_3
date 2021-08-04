import React, { useState, useEffect } from 'react';
import { getManageApplication } from 'utils/api';
import TableRow from './table/tableRow';

const ManageTable = (props) => {
  const headerMeta = ['이름', '나이', '주소', '신용카드'];

  const [tableData, setTableData] = useState([getManageApplication(1)]);

  return (
    <>
      <h3>Manage Table</h3>
      <div>
        {tableData.length !== 0 && (
          <table>
            <thead>
              <tr>
                {headerMeta.map((i) => (
                  <th>{i}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableData.map((d, i) => {
                return <TableRow key={i} data={d} />;
              })}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
};

export default ManageTable;
