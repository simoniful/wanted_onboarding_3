import mockData from 'utils/usersData';

// LocalStorage 함수 사용시 name 은 config.js 안에 있는 STORAGE.DATA 통해서 설정
export const setLocalStorage = (name, data) => {
  localStorage.removeItem(name);
  localStorage.setItem(name, JSON.stringify(data));
};

export const getLocalStorage = (name) => {
  const storageData = JSON.parse(localStorage.getItem(name)) || mockData;

  return storageData;
};

export const clearLocalStorage = () => {
  localStorage.clear();
};

export const tempGetStoreage = (keyward) => {
  const storage = JSON.parse(localStorage.getItem(`${keyward}`));

  return storage;
};

// 임시 스토리지 관련 함수입니다.
export const tempSetStoreage = () => {
  localStorage.setItem(
    'data',
    JSON.stringify([
      {
        id: 1,
        password: '1234',
        name: '김동원',
        age: 25,
        address: '서울시 강동구',
        cardNumber: '0000-1111-2222-3333',
        userType: 'teacher',
      },
      {
        id: 2,
        password: '1234',
        name: '김참치',
        age: 26,
        address: '서울시 강남구',
        cardNumber: '0000-1111-2222-3333',
        userType: 'parent',
      },
      {
        id: 3,
        password: '1234',
        name: '김마요',
        age: 27,
        address: '서울시 송파구',
        cardNumber: '0000-1111-2222-3333',
        userType: 'teacher',
      },
      {
        id: 4,
        password: '1234',
        name: '원티드',
        age: 29,
        address: '서울시 서초구',
        cardNumber: '0000-1111-2222-3333',
        userType: 'parent',
      },
      {
        id: 5,
        password: '1234',
        name: '위코드',
        age: 28,
        address: '서울시 성동구',
        cardNumber: '0000-1111-2222-3333',
        userType: 'parent',
      },
      {
        id: 6,
        password: '1234',
        name: '임팩트',
        age: 24,
        address: '서울시 광진구',
        cardNumber: '0000-1111-2222-3333',
        userType: 'parent',
      },
      {
        id: 7,
        password: '1234',
        name: '김동원',
        age: 25,
        address: '서울시 강동구',
        cardNumber: '0000-1111-2222-3333',
        userType: 'teacher',
      },
      {
        id: 8,
        password: '1234',
        name: '김참치',
        age: 26,
        address: '서울시 강남구',
        cardNumber: '0000-1111-2222-3333',
        userType: 'parent',
      },
      {
        id: 9,
        password: '1234',
        name: '김마요',
        age: 27,
        address: '서울시 송파구',
        cardNumber: '0000-1111-2222-3333',
        userType: 'teacher',
      },
      {
        id: 10,
        password: '1234',
        name: '원티드',
        age: 29,
        address: '서울시 서초구',
        cardNumber: '0000-1111-2222-3333',
        userType: 'parent',
      },
      {
        id: 11,
        password: '1234',
        name: '위코드',
        age: 28,
        address: '서울시 성동구',
        cardNumber: '0000-1111-2222-3333',
        userType: 'teacher',
      },
      {
        id: 12,
        password: '1234',
        name: '임팩트',
        age: 24,
        address: '서울시 광진구',
        cardNumber: '0000-1111-2222-3333',
        userType: 'parent',
      },
      {
        id: 13,
        password: '1234',
        name: '김동원',
        age: 25,
        address: '서울시 강동구',
        cardNumber: '0000-1111-2222-3333',
        userType: 'parent',
      },
      {
        id: 14,
        password: '1234',
        name: '김참치',
        age: 26,
        address: '서울시 강남구',
        cardNumber: '0000-1111-2222-3333',
        userType: 'teacher',
      },
      {
        id: 15,
        password: '1234',
        name: '김마요',
        age: 27,
        address: '서울시 송파구',
        cardNumber: '0000-1111-2222-3333',
        userType: 'parent',
      },
      {
        id: 16,
        password: '1234',
        name: '원티드',
        age: 29,
        address: '서울시 서초구',
        cardNumber: '0000-1111-2222-3333',
        userType: 'teacher',
      },
      {
        id: 17,
        password: '1234',
        name: '위코드',
        age: 28,
        address: '서울시 성동구',
        cardNumber: '0000-1111-2222-3333',
        userType: 'parent',
      },
      {
        id: 18,
        password: '1234',
        name: '임팩트',
        age: 24,
        address: '서울시 광진구',
        cardNumber: '0000-1111-2222-3333',
        userType: 'teacher',
      },
      {
        id: 19,
        password: '1234',
        name: '김동원',
        age: 25,
        address: '서울시 강동구',
        cardNumber: '0000-1111-2222-3333',
        userType: 'parent',
      },
      {
        id: 20,
        password: '1234',
        name: '김참치',
        age: 26,
        address: '서울시 강남구',
        cardNumber: '0000-1111-2222-3333',
        userType: 'teacher',
      },
      {
        id: 21,
        password: '1234',
        name: '김마요',
        age: 27,
        address: '서울시 송파구',
        cardNumber: '0000-1111-2222-3333',
        userType: 'teacher',
      },
      {
        id: 22,
        password: '1234',
        name: '원티드',
        age: 29,
        address: '서울시 서초구',
        cardNumber: '0000-1111-2222-3333',
        userType: 'teacher',
      },
      {
        id: 23,
        password: '1234',
        name: '위코드',
        age: 28,
        address: '서울시 성동구',
        cardNumber: '0000-1111-2222-3333',
        userType: 'teacher',
      },
      {
        id: 24,
        password: '1234',
        name: '임팩트',
        age: 24,
        address: '서울시 광진구',
        cardNumber: '0000-1111-2222-3333',
        userType: 'parent',
      },
      {
        id: 25,
        password: '1234',
        name: '김동원',
        age: 25,
        address: '서울시 강동구',
        cardNumber: '0000-1111-2222-3333',
        userType: 'parent',
      },
      {
        id: 26,
        password: '1234',
        name: '김참치',
        age: 26,
        address: '서울시 강남구',
        cardNumber: '0000-1111-2222-3333',
        userType: 'teacher',
      },
      {
        id: 27,
        password: '1234',
        name: '김마요',
        age: 27,
        address: '서울시 송파구',
        cardNumber: '0000-1111-2222-3333',
        userType: 'teacher',
      },
      {
        id: 28,
        password: '1234',
        name: '원티드',
        age: 29,
        address: '서울시 서초구',
        cardNumber: '0000-1111-2222-3333',
        userType: 'teacher',
      },
      {
        id: 29,
        password: '1234',
        name: '위코드',
        age: 28,
        address: '서울시 성동구',
        cardNumber: '0000-1111-2222-3333',
        userType: 'parent',
      },
      {
        id: 30,
        password: '1234',
        name: '임팩트',
        age: 24,
        address: '서울시 광진구',
        cardNumber: '0000-1111-2222-3333',
        userType: 'teacher',
      },
    ]),
  );
};
