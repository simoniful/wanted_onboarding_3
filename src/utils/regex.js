export const REGEXP = {
  idRegExp: /^[a-zA-Z0-9]{4,12}$/,
  passwordRegExp: /^[a-zA-Z0-9]{4,16}$/,
  nameRegExp: /^[가-힣]{2,4}$/,
};

export const validate = (value, regExp) => {
  const reg = new RegExp(regExp);
  return reg.test(value);
};
