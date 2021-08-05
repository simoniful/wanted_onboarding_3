import { useState, useEffect } from 'react';

const useForm = (callback, validate) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
    // const newUserinfo = {
    //   id: values.id,
    //   password: values.password,
    //   name: values.name,
    //   age: values.age,
    //   address: values.address,
    //   cardNumber: values.cardNumber,
    //   userType: 'parent',
    // };
  };

  const handleChange = (event) => {
    event.persist();
    setValues((values) => ({ ...values, [event.target.name]: event.target.value }));
  };

  //   if (Object.values(newUserinfo).every((property) => property !== '')) {
  //     saveStore('userList', newUserinfo);
  //     alert('가입이 완료되었습니다!');
  //   } else {
  //     alert('가입 양식을 다시 확인해주세요.');
  //   }
  // };

  // const checkDup = () => {
  //   const userList = getStore('userList');
  //   if (userList.every((storedUser) => storedUser.id !== id)) {
  //     alert('가입 가능한 아이디입니다.');
  //   } else {
  //     alert('이미 가입된 아이디입니다.');
  //   }
  // };

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
  };
};

export default useForm;
