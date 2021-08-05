import { useState } from 'react';

export default function (initValue, validator) {
  const [value, setValue] = useState(initValue);
  const [isError, setIsError] = useState(false);

  const checkIsError = () => {
    if (!value) return setIsError(true);

    setIsError(false);
  };

  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    let willUpdate = true;
    if (typeof validator === 'function') {
      willUpdate = validator(value);
    }
    if (willUpdate) {
      setValue(value);
    }
  };

  const clearValue = () => {
    setValue('');
  };

  return { value, onChange, isError, checkIsError, clearValue };
}
