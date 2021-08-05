import React from 'react';

const Address = (props) => {
  const { value, name } = props;
  function fetchAddressApi() {
    new window.daum.Postcode({
      oncomplete(data) {
        // full 주소명 받기
        // const res = data.userSelectedType === 'R' ? data.roadAddress : data.jibunAddress;

        // 시군구 데이터 까지만 받기
        props.onChange({ target: { value: `${data.sido} ${data.sigungu}` } });
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
