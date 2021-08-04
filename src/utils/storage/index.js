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
        id: 'admin',
        password: 'admin123',
        name: '강리자',
        age: 36,
        address: '서울시 강남구',
        cardNumber: '5222-1224-1224-1224',
        userType: 'admin',
      },
      {
        id: 'jin66',
        password: '1234',
        name: '장명진',
        age: 41,
        address: '울릉군 독도리',
        cardNumber: '4111-1111-1111-1111',
        userType: 'teacher',
      },
      {
        id: 'sonisthebest00',
        password: 'son6876',
        name: '손홍민',
        age: 29,
        address: '옹진군 백령면',
        cardNumber: '6111-2444-2444-2444',
        userType: 'teacher',
      },
      {
        id: 'hamonica22',
        password: 'monana009',
        name: '모니카',
        age: 33,
        address: '뉴욕시 맨해튼구',
        cardNumber: '5112-1443-1443-1443',
        userType: 'parent',
      },
      {
        id: 'chaboom33',
        password: 'bkc123333',
        name: '차범근',
        age: 68,
        address: '서울시 종로구',
        cardNumber: '6611-2114-2114-2114',
        userType: 'parent',
      },
      {
        id: 'bpjenny82',
        password: 'jen82bp',
        name: '김제니',
        age: 25,
        address: '서울시 용산구',
        cardNumber: '3112-6614-6614-6614',
        userType: 'teacher',
      },
      {
        id: 'kdb12345',
        password: '1234kdb',
        name: '강도범',
        age: 51,
        address: '부산시 해운대구',
        cardNumber: '9111-6111-6111-6111',
        userType: 'parent',
      },
      {
        id: 'ouch123',
        password: '123ochch',
        name: '엄어나',
        age: 45,
        address: '군산시 옥서면',
        cardNumber: '9111-6111-6111-6111',
        userType: 'parent',
      },
      {
        id: 'attack199',
        password: 'naasdd123',
        name: '어택',
        age: 38,
        address: '서귀포시 중문동',
        cardNumber: '7221-1123-1123-1123',
        userType: 'parent',
      },
      {
        id: 'presidentKim12',
        password: 'iamking22',
        name: '김정은',
        age: 37,
        address: '평양시 혁신동',
        cardNumber: '1111-0000-0000-0000',
        userType: 'parent',
      },
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

// 스토리지 관련 임시 함수
export function CheckPropDoup(storeArray, propVal) {
  for (let i = 0, k = storeArray.length; i < k; i += 1) {
    if (storeArray[i] === propVal) return true;
  }
  return false;
}

export function saveStore(key, value) {
  if (typeof Storage !== 'undefined') {
    const prevStored = JSON.parse(localStorage.getItem(key)) || [];
    let obj = {};
    obj = Object.assign(obj, value);
    if (!CheckPropDoup(prevStored, value)) prevStored.push(obj);
    localStorage.setItem(key, JSON.stringify(prevStored));
  }
}

export function getStore(key) {
  if (typeof Storage !== 'undefined') {
    return JSON.parse(localStorage.getItem(key)) || [];
  }
}

export function removeStore(key, value) {
  if (typeof Storage !== 'undefined') {
    const prevStored = JSON.parse(localStorage.getItem(key)) || [];
    prevStored.splice(prevStored.indexOf(value), 1);
    localStorage.setItem(key, JSON.stringify(prevStored));
  }
}
