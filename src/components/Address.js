import React from 'react';

const Address = ({ value, name, onChange }) => {
  function fetchAddressApi() {
    new window.daum.Postcode({
      oncomplete(data) {
        onChange({ target: { name, value: `${data.sido} ${data.sigungu}` } });
      },
    }).open();
  }
  return (
    <input
      type='text'
      name={name}
      value={value}
      onClick={fetchAddressApi}
      placeholder='주소를 입력해주세요 ( 시군구 까지만 입력됩니다. )'
      readOnly
    />
  );
};
export default Address;
