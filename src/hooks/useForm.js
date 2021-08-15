import { useState, useEffect } from 'react';

const useForm = (callback, validate) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      if (callback(values)) {
        setValues({});
        setIsSubmitting(false);
      }
    }
  }, [errors, callback, isSubmitting, values]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  const handleChange = (event) => {
    if (event.persist) {
      event.persist();
      setValues((values) => ({ ...values, [event.target.name]: event.target.value }));
    } else {
      setValues((values) => ({ ...values, [event.target.name]: event.target.value }));
    }
  };

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
  };
};

export default useForm;
