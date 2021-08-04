import React, { useState, useEffect } from 'react';
import { withRouter, useHistory } from 'react-router-dom';
import useInput from 'hooks/useInput';
import { REGEXP, validate } from 'utils/regex';
import { getStore, saveStore } from 'utils/storage/index';

function Signup() {
  const [idStatus, setIdStatus] = useState('');
  const [nameStatus, setNameStatus] = useState('');
  const [passwordStatus, setPasswordStatus] = useState('');

  const id = useInput('', (value) => value.length <= 12);
  const password = useInput('', (value) => value.length <= 16);
  // const checkingPassword = useInput('');
  const name = useInput('', (value) => value.length <= 4);
  const age = useInput(0);
  const address = useInput('');
  const cardNumber = useInput('');
  const userType = useInput('parent');

  const history = useHistory();

  useEffect(() => {
    if (!validate(id.value, REGEXP.idRegExp)) {
      setIdStatus('ID는 4~12자의 영문 대소문자와 숫자로만 입력하여 주세요.');
    } else {
      setIdStatus('적절한 ID입니다.');
    }

    if (!validate(password.value, REGEXP.passwordRegExp)) {
      setPasswordStatus('비밀번호는 4~16자의 영문 대소문자와 숫자로만 입력하여 주세요.');
    } else if (id.value === password.value) {
      setPasswordStatus('비밀번호는 아이디와 같을 수 없습니다.');
    } else {
      setPasswordStatus('적절한 비밀번호입니다.');
    }

    if (!validate(name.value, REGEXP.nameRegExp)) {
      setNameStatus('이름은 한글로 2~4자로 입력하여 주세요.');
    } else {
      setNameStatus('적절한 이름입니다.');
    }
  }, [id, password, name]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUserinfo = {
      id: id.value,
      password: password.value,
      name: name.value,
      age: age.value,
      address: address.value,
      cardNumber: cardNumber.value,
      userType: userType.value,
    };

    if (Object.values(newUserinfo).every((property) => property !== '')) {
      saveStore('userList', newUserinfo);
      alert('가입이 완료되었습니다!');
      history.push('/login');
    } else {
      alert('가입 양식을 다시 확인해주세요.');
    }
  };

  const checkDup = () => {
    const userList = getStore('userList');
    if (userList.every((storedUser) => storedUser.id !== id)) {
      alert('가입 가능한 아이디입니다.');
    } else {
      alert('이미 가입된 아이디입니다.');
    }
  };

  return (
    <div>
      <h2>회원가입</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor='id'>
          <h3>아이디</h3>
          <input type='text' name='id' id='id' placeholder='아이디 입력' {...id} />
        </label>
        <div>{idStatus}</div>
        <label htmlFor='password'>
          <h3>비밀번호</h3>
          <input
            type='password'
            name='password'
            id='password'
            placeholder='비밀번호 입력'
            {...password}
          />
        </label>
        <div>{passwordStatus}</div>
        <label htmlFor='name'>
          <h3>성명</h3>
          <input type='text' name='name' id='name' placeholder='이름 입력' {...name} />
        </label>
        <div>{nameStatus}</div>
        <label htmlFor='age'>
          <h3>나이</h3>
          <input type='number' name='age' id='age' {...age} />
        </label>
        <label htmlFor='address'>
          <h3>주소</h3>
          <input type='text' name='address' id='address' {...address} />
        </label>
        <label htmlFor='address'>
          <h3>신용카드</h3>
          <input type='text' name='cardNumber' id='cardNumber' {...cardNumber} />
        </label>
        <div>
          <button type='submit'> 가입하기 </button>
        </div>
      </form>
    </div>
  );
}

export default withRouter(Signup);
