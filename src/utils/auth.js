import { LOGIN_USER } from 'utils/config';

export const login = (userData) => {
  localStorage.setItem(LOGIN_USER, JSON.stringify(userData));
};

export const logout = () => {
  localStorage.removeItem(LOGIN_USER);
};

export const checkAuth = (_userTypes) =>
  _userTypes?.includes(JSON.parse(localStorage.getItem(LOGIN_USER))?.userType) ? true : false;
