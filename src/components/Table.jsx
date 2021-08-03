import React from 'react';
import userData from '../data/userData.json';

const Table = () => (
  <div className='container'>
    <table>
      <thead>테이블 샘플</thead>
      <tbody>
        {userData.map(({ id, name, age, address, cardNumber, userType }) => (
          <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{age}</td>
            <td>{address}</td>
            <td>{cardNumber}</td>
            <td>{userType}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default Table;
