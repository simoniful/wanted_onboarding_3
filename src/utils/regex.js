export const REGEXP = {
  idRegExp: /^[a-zA-Z0-9]{4,12}$/,
  passwordRegExp: /^[a-zA-Z0-9]{4,16}$/,
  nameRegExp: /^[가-힣]{2,4}$/,
};

export const validate = (value, regExp) => {
  const reg = new RegExp(regExp);
  return reg.test(value);
};

// export function validate(values) {
//   let errors = {};
//   if (!values.email) {
//     errors.email = 'Email address is required';
//   } else if (!/\S+@\S+\.\S+/.test(values.email)) {
//     errors.email = 'Email address is invalid';
//   }
//   if (!values.password) {
//     errors.password = 'Password is required';
//   } else if (values.password.length < 8) {
//     errors.password = 'Password must be 8 or more characters';
//   }
//   return errors;
// }
