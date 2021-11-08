import { useState } from 'react';

const useInput = (initialInput = '') => {
  const [value, setValue] = useState(initialInput);

  const onChange = (event) => {
    setValue(event.target.value);
  };
  return { value, onChange };
};

export default useInput;
