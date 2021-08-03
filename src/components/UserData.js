import React from 'react';

const UserData = ({ userData, loading }) => {
  return (
    <>
      {loading && <div> loading... </div>}
      {userData
        ? userData.map((data) => (
            <tr key={data.id}>
              <td>{data.id}</td>
              <td>{data.name}</td>
              <td>{data.age}</td>
              <td>{data.address}</td>
            </tr>
          ))
        : null}
    </>
  );
};
export default UserData;
