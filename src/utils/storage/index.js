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
