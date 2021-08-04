import React from 'react';

const Address = (props) => {
  const { value } = props;
  function fetchAddressApi() {
    new window.daum.Postcode({
      oncomplete(data) {
        const res = data.userSelectedType === 'R' ? data.roadAddress : data.jibunAddress;
        props.onChange({ target: { value: res } });
      },
    }).open();
  }
  return (
    <input
      type='text'
      value={value}
      onClick={fetchAddressApi}
      placeholder='주소를 입력해주세요'
      readOnly
    />
  );
};
export default Address;
